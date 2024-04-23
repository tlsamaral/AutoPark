import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

import axios from '../../services/axios';
import FormUsers from '../FormUsers/FormUsers';
import UsersTable from '../UsersTable/UsersTable';
import AppContext from '../../context/AppContext';
import ModalDialog from '../ui-radix/ModalDialog/ModalDialog';

function Users() {
  const { users, setUsers } = useContext(AppContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/users');
        setUsers(response.data);
      } catch (err) {
        console.log(err);
        toast.error('Failed to fetch users. Please try again later.');
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-3xl text-slate-200 mt-4 font-bold">Users</h1>
        <ModalDialog
          buttonText="Add New User"
          description="Register a new user to unlock exclusive features and services. Enter their name, email, and create a secure password to get started!"
        >
          <FormUsers />
        </ModalDialog>
      </div>
      <UsersTable users={users} />
    </div>
  );
}

export default Users;
