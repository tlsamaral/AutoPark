import { useContext, useEffect, useState } from 'react';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { cryptoRandomStringAsync } from 'crypto-random-string';

import axios from '../../services/axios';
import AppContext from '../../context/AppContext';

function FormUsers() {
  const {
    setUsers,
    setDialogOpen,
    selectedUser,
    setSelectedUser,
    setIsLoading,
  } = useContext(AppContext);
  const [formUser, setFormUser] = useState({
    id: 0,
    nome: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormUser((prevFormUser) => ({
      ...prevFormUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      setDialogOpen(false);
      if (formUser.nome.length <= 3) {
        toast.error('The name includes less than three characters');
        return;
      }
      if (!isEmail(formUser.email)) {
        toast.error('This email is not valid!');
      }

      if (formUser.id === 0) {
        try {
          const passWordCrypt = await cryptoRandomStringAsync({
            length: 8,
            type: 'base64',
          });
          formUser.password = passWordCrypt;
          const response = await axios.post('/users', {
            ...formUser,
          });
          toast.success('User created with success!');
          setUsers((state) => [...state, response.data]); // Adicionando o novo usuário retornado pela API
        } catch (err) {
          console.log(err);
          toast.error('Unable to create user. Try again!');
        }
      } else {
        try {
          await axios.put(`/users/`, {
            ...formUser,
          });
          setIsLoading(false);
          toast.success('User updated with success!');
          setUsers((state) =>
            state.map((user) => (user.id === formUser.id ? formUser : user))
          );
        } catch (err) {
          console.log(err);
          toast.error('Unable to update user. Try again!');
        }
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      toast.error('Unable to register user. Try again!');
    }
  };

  useEffect(() => {
    console.log(selectedUser);
    setFormUser(selectedUser);
  }, [setSelectedUser]);

  return (
    <form className="w-full m-auto flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="mt-3 w-full">
        <label className="text-slate-200" htmlFor="name">
          Name
        </label>
        <input
          className="w-full h-10 rounded-md pl-1"
          type="text"
          name="nome"
          onChange={handleChange}
          value={formUser.nome}
        />
      </div>
      <div className="mt-3 w-full">
        <label className="text-slate-200" htmlFor="email">
          Email
        </label>
        <input
          className="w-full h-10 rounded-md pl-1"
          type="email"
          name="email"
          onChange={handleChange}
          value={formUser.email}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="w-1/3 h-10 bg-slate-500 rounded-md mt-9 text-slate-100 shadow-lg"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  );
}

export default FormUsers;
