import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import history from '../../../services/history';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success(`Welcome ${response.data.user.nome}.`);
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath);
  } catch (e) {
    toast.error('Email or password is invalid');

    yield put(actions.loginFailure());
  }
}

function persistRehaydrate({ payload }) {
  const token = get(payload, 'auth.token', '');

  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

// eslint-disable-next-line consistent-return
function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;
  console.log(payload);
  try {
    if (id) {
      yield call(axios.put, '/users/', {
        id,
        email,
        nome,
        password: password || undefined,
      });
      toast.success('Account changed successfully!');
      yield put(actions.registerUpdatedSuccess({ nome, email, password }));
    } else {
      yield call(axios.post, '/users', {
        email,
        nome,
        password,
      });
      toast.success('Account created successfully!');
      yield put(actions.registerCreatedSuccess({ nome, email, password }));
    }
  } catch (e) {
    console.log(e);
    const errors = get(e, 'response.data.error', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.info('You need to log in again.');
      yield put(actions.loginFailure());
      return history.push('/login');
    }
    if (errors.length > 0) {
      errors.map((err) => toast.error(err));
    } else {
      toast.error('unknown error');
    }

    return yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehaydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
