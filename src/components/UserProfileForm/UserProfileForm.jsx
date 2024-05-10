import PropTypes from 'prop-types';
import { useEffect, useState, useContext } from 'react';
import { get } from 'lodash';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineModeEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { isEmail } from 'validator';

import { toast } from 'react-toastify';
import AppContext from '../../context/AppContext';
import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';

function UserProfileForm({ userState }) {
  const dispatch = useDispatch();
  const { setDialogUserProfileOpen, setUserProfile } = useContext(AppContext);

  const [file, setFile] = useState(null);
  const [foto, setFoto] = useState('');
  const [user, setUser] = useState({
    id: 0,
    nome: '',
    email: '',
    password: '',
    role: '',
  });

  useEffect(() => {
    setFoto(get(userState, 'Fotos[0].url', ''));

    const dataUser = {
      id: userState.id,
      nome: userState.nome,
      email: userState.email,
    };
    setUser(dataUser);
  }, []);

  const handleIChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('user_id', user.id);
      formData.append('foto', file);

      let formErrors = false;
      if (user.nome.length < 3 || user.nome.length > 255) {
        formErrors = true;
        toast.error('O Nome deve ter entre 3 e 255 caracteres!');
      }

      if (!isEmail(user.email)) {
        formErrors = true;
        toast.error('O e-mail deve ser válido!');
      }

      if (!user.id && (user.password.length < 6 || user.password.length > 50)) {
        formErrors = true;
        toast.error('A senha deve ter entre 6 e 50 caracteres!');
      }

      if (formErrors) return;

      dispatch(actions.registerRequest({ ...user }));

      await axios.post('/fotos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUserProfile(foto);
      setDialogUserProfileOpen(false);
      toast.success('User profile updated successfully!');

      if (user.password) {
        dispatch(actions.loginFailure());
      }
    } catch (err) {
      console.log(err);
      setDialogUserProfileOpen(false);
    }
  };

  const handleImageChange = async (e) => {
    const fileImage = e.target.files[0];
    const fotoURL = URL.createObjectURL(fileImage);

    setFoto(fotoURL);
    setFile(fileImage);
  };

  return (
    <form className="w-full m-auto flex flex-col gap-3" onSubmit={handleSubmit}>
      <div>
        <div className="relative">
          <div className="w-16 h-16 overflow-hidden rounded-full border border-dashed flex justify-center items-center">
            {foto ? <img src={foto} alt="" /> : <FaUserCircle size={56} />}
          </div>
          <label
            className="absolute w-5 h-5 rounded-full bottom-0 bg-neutral-500/40 flex justify-center items-center cursor-pointer shadow-lg"
            htmlFor="foto"
          >
            <MdOutlineModeEdit size={12} className="text-slate-200" />
          </label>
          <input
            type="file"
            className="hidden"
            id="foto"
            onChange={handleImageChange}
          />
        </div>
      </div>
      <div className="mt-3 w-full">
        <label className="text-slate-200" htmlFor="name">
          Name
        </label>
        <input
          className="w-full h-10 rounded-md pl-1"
          type="text"
          name="nome"
          onChange={handleIChange}
          value={user.nome}
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
          onChange={handleIChange}
          value={user.email}
        />
      </div>
      <div className="mt-3 w-full">
        <label className="text-slate-200" htmlFor="email">
          Password
        </label>
        <input
          className="w-full h-10 rounded-md pl-1"
          type="password"
          name="password"
          onChange={handleIChange}
          value={user.password}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="w-1/3 h-10 bg-slate-500 rounded-md mt-9 text-slate-100 shadow-lg"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default UserProfileForm;

UserProfileForm.propTypes = {
  userState: PropTypes.shape({
    id: PropTypes.number,
    fotoUrl: PropTypes.string,
    nome: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    role: PropTypes.string,
    Fotos: PropTypes.array,
  }).isRequired,
};
