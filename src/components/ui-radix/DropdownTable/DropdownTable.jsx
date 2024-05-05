import { DropdownMenu, Button } from '@radix-ui/themes';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import propTypes from 'prop-types';

function DropdownTable({ id, handleDelete, handleUpdate }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button color="gray" className="cursor-pointer">
          <HiOutlineDotsVertical className="text-color-slate-700" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item onClick={() => handleUpdate(id)}>
          Edit
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item color="red" onClick={() => handleDelete(id)}>
          Delete
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default DropdownTable;

DropdownTable.propTypes = {
  id: propTypes.number.isRequired,
  handleDelete: propTypes.func.isRequired,
  handleUpdate: propTypes.func.isRequired,
};
