import { TbSettingsUp } from 'react-icons/tb';
import { useSelector, useDispatch } from 'react-redux';
import { DropdownMenu, Button } from '@radix-ui/themes';
import { FaUserCircle } from 'react-icons/fa';
import { get } from 'lodash';
import { useContext, useEffect, useState } from 'react';
import * as actions from '../../store/modules/auth/actions';
import AppContext from '../../context/AppContext';
import ModalDialogUserProfile from '../ui-radix/ModalDialogUserProfile/ModalDialogUser';

function UserCard() {
  const { setDialogUserProfileOpen, userProfile } = useContext(AppContext);
  const user = useSelector((state) => state.auth.user);
  const [userImg, setUserImg] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Mudou', user);
    setEmail(user.email);
    setNome(user.nome);
  }, [user.nome, user.email]);

  useEffect(() => {
    const userImageUrl = get(user, 'Fotos[0].url', null);

    if (!userImageUrl) return;
    setUserImg(userImageUrl);
  }, [user]);

  useEffect(() => {
    setUserImg(userProfile);
  }, [userProfile]);

  const handleLogoff = () => {
    dispatch(actions.loginFailure());
  };
  return (
    <>
      <div className="w-11/12 left-2 absolute bottom-0 border-t-gray-50 flex justify-between items-center p-5 mb-2 rounded-2xl">
        <div className="flex">
          <div className="w-12 h-12 rounded-full flex justify-center items-center overflow-hidden border-slate-400 border-2">
            {userImg ? (
              <img src={userImg} className="w-full h-full" alt="User Img" />
            ) : (
              <FaUserCircle size={38} />
            )}
          </div>
          <div className="flex flex-col ml-3">
            <span className="text-xl text-gray-200">{nome}</span>
            <small className="text-sm text-gray-300/50 font-medium">User</small>
          </div>
        </div>
        <div />
        <div className="hover:bg-neutral-900 rounded-lg transition-all">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button
                className="!bg-transparent !h-10 !w-10 !cursor-pointer"
                size={4}
                radius="full"
              >
                <TbSettingsUp size={28} className="text-gray-100" />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item disabled>{email}</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item onClick={() => setDialogUserProfileOpen(true)}>
                My Profile
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item color="red" onClick={handleLogoff}>
                Logoff
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
      <ModalDialogUserProfile />
    </>
  );
}

export default UserCard;
