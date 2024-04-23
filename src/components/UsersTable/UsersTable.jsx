import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// import { MdEditNote } from 'react-icons/md';

import { toast } from 'react-toastify';
import axios from '../../services/axios';
import DropdownUserTable from '../ui-radix/DropdownUsersTable/DropdownUsersTable';
import AppContext from '../../context/AppContext';

function Row({ user }) {
  const { users, setUsers, setSelectedUser, setDialogOpen } =
    useContext(AppContext);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/users/${id}`);
      const newList = users.filter((u) => u.id !== id);
      setUsers([...newList]);
    } catch (err) {
      console.log(err);
      toast.error('Unknow error.');
    }
  };

  const handleUpdate = async (id) => {
    try {
      console.log(id);

      const getData = await axios.get(`/users/${id}}`);
      const getUser = getData.data;
      setSelectedUser(getUser);
      setDialogOpen(true);
    } catch (err) {
      console.log(err);
      toast.error('Unknow error.');
    }
  };
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-slate-50">{user.nome}</td>
      <td className="px-6 py-4 whitespace-nowrap text-slate-50">
        {user.email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-slate-50">Admin</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <DropdownUserTable
          id={user.id}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </td>
    </tr>
  );
}

function UsersTable({ users }) {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-200/50 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-200/50 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-200/50 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-200/50 uppercase tracking-wider"
            >
              Role
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {users.map((user) => (
            <Row key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;

UsersTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      nome: PropTypes.string,
      email: PropTypes.string,
    })
  ).isRequired,
};

Row.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    nome: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
