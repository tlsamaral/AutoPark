import { Dialog } from '@radix-ui/themes';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AppContext from '../../../context/AppContext';
import UserProfileForm from '../../UserProfileForm/UserProfileForm';

function ModalDialogUserProfile() {
  const { dialogUserProfileOpen } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const userState = useSelector((state) => state.auth.user);

  useEffect(() => {
    setIsOpen(dialogUserProfileOpen);
  }, [dialogUserProfileOpen]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Edit your profile</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to your profile.
        </Dialog.Description>

        <UserProfileForm userState={userState} />
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default ModalDialogUserProfile;
