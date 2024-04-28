import React, { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

import * as actions from '../../store/modules/auth/actions';

function FormLogin(props) {
  const dispatch = useDispatch();
  const prevPath = get(props, 'location.state.prevPath', '/');

  // const isLoading = useSelector((state) => state.auth.isLoading);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  function handleInputChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(user.email)) {
      formErrors = true;
      toast.error('O e-mail deve ser válido!');
    }

    if (user.password.length < 6 || user.password.length > 50) {
      formErrors = true;
      toast.error('A senha deve ter entre 6 e 50 caracteres!');
    }

    if (formErrors) return;
    dispatch(actions.loginRequest({ ...user, prevPath }));
  };
  return (
    <form className="space-y-6 min-w-50" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-200"
        >
          Email
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400/50 sm:text-sm sm:leading-6 pl-1 bg-slate-300"
            onChange={handleInputChange}
            value={user.email}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-200"
          >
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400/50 sm:text-sm sm:leading-6 pl-1 bg-slate-300"
            onChange={handleInputChange}
            value={user.password}
          />
        </div>
        <div className="flex justify-end">
          <div className="text-sm mt-1">
            <a
              href="#"
              className="font-medium text-xs text-slate-100 hover:text-white"
            >
              Forgot your password?
            </a>
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center items-center gap-2 rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Acess the system
          <HiLocationMarker />
        </button>
      </div>
    </form>
  );
}

export default FormLogin;
