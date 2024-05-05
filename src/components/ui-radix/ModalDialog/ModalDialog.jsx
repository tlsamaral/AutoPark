import { useContext } from 'react';
import { Dialog, Flex, Button } from '@radix-ui/themes';
import PropTypes from 'prop-types';
import AppContext from '../../../context/AppContext';

function ModalDialog({ buttonText, description, children }) {
  const { dialogOpen, setDialogOpen, setSelectedVacancy } =
    useContext(AppContext);

  const handleClick = () => {
    setSelectedVacancy({
      id: 0,
      description: '',
      sensor_id: '',
      port_r: '',
      port_g: '',
      port_b: '',
      micro_id: '',
      id_occupied: false,
    });
  };
  return (
    <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger>
        <Button color="gray" onClick={handleClick}>
          {buttonText}
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>{buttonText}</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          {description}
        </Dialog.Description>

        <Flex direction="column" gap="3">
          {children}
        </Flex>

        {/* <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button type="submit">Save</Button>
          </Dialog.Close>
        </Flex> */}
      </Dialog.Content>
    </Dialog.Root>
  );
}

ModalDialog.propTypes = {
  buttonText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalDialog;
