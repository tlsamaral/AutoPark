import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

import { Container } from './styled';
import * as actions from '../../store/modules/auth/actions';
import Logo from '../../assets/images/logo.png';
import AppContext from '../../context/AppContext';

function Login(props) {
  const { setIsLoading } = useContext(AppContext);
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
    setIsLoading(true);
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
    <Container>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={Logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-400">
            Acesse sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-1 bg-slate-300"
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-1 bg-slate-300"
                  onChange={handleInputChange}
                  value={user.password}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Acessar sistema
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Login;
