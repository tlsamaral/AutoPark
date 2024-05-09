import { DropdownMenu, Button } from '@radix-ui/themes';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import propTypes from 'prop-types';

function DropdownFunc({ id, handleUpdate }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button color="gray" className="cursor-pointer custom-button">
          <HiOutlineDotsVertical className="text-color-slate-700 text-xl" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item onClick={() => handleUpdate(id)}>
          Force Changes
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default DropdownFunc;

DropdownFunc.propTypes = {
  id: propTypes.number.isRequired,
  handleUpdate: propTypes.func.isRequired,
};
