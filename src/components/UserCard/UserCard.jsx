import { TbSettingsUp } from 'react-icons/tb';
import { useSelector, useDispatch } from 'react-redux';
import { DropdownMenu, Button } from '@radix-ui/themes';
import { get } from 'lodash';

import { useContext } from 'react';
import Avatar from '../../assets/images/danny-bad.jpeg';
import * as actions from '../../store/modules/auth/actions';
import AppContext from '../../context/AppContext';
import ModalDialogUserProfile from '../ui-radix/ModalDialogUserProfile/ModalDialogUser';

function UserCard() {
  const { setDialogUserProfileOpen } = useContext(AppContext);
  const user = useSelector((state) => state.auth.user);

  const { nome, email } = user;
  const dispatch = useDispatch();
  const handleLogof = () => {
    dispatch(actions.loginFailure());
  };

  return (
    <>
      <div className="w-11/12 left-2 absolute bottom-0 border-t-gray-50 flex justify-between items-center p-5 mb-2 rounded-2xl">
        <div className="flex">
          <div className="w-12 h-12 rounded-full flex justify-center items-center overflow-hidden border-slate-400 border-2">
            {get(user, 'Fotos[0].url', false) ? (
              <img src={user.Fotos[0].url} alt="" />
            ) : (
              <img src={Avatar} className="w-full h-full" alt="logo" />
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
              <DropdownMenu.Item color="red" onClick={handleLogof}>
                Logof
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
