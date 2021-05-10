import { call, put, takeEvery } from 'redux-saga/effects';

import {
  initUsersAC,
  addUsersAC,
  delUsersAC,
  editUsersAC,
  cabinetAC,
} from '../actionCreators/actionCreators';

const fetchINITUser = () => {
  return fetch(process.env.REACT_APP_URL + '/users')
    .then((res) => res.json())
    .then((data) => data);
};

const fetchADDUser = (payload) => {
  return fetch(process.env.REACT_APP_URL + '/users', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      name: payload.name,
      age: payload.age,
      height: payload.height,
      sex: payload.sex,
    }),
  })
    .then((res) => res.json())
    .then((data) => data);
};

const fetchDELUser = (payload) => {
  return fetch(process.env.REACT_APP_URL + '/users/' + payload.id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'Application/json' },
  })
    .then((res) => res.json())
    .then((data) => data);
};

const fetchEDITUser = (payload) => {
  return fetch(process.env.REACT_APP_URL + '/users/' + payload.id, {
    method: 'PATCH',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      name: payload.name,
      age: payload.age,
      height: payload.height,
     
    }),
  })
    .then((res) => res.json())
    .then((data) => data);
};

function* sagaUserWorker(action) {
  const users = yield call(fetchINITUser);
  yield put(initUsersAC(users));
}

function* sagaAddUserWorker(action) {
  const users = yield call(fetchADDUser, action.payload);
  yield put(addUsersAC(users));
}

function* sagaDelUserWorker(action) {
  const users = yield call(fetchDELUser, action.payload);
  yield put(delUsersAC(users));
}

function* sagaEditUserWorker(action) {
  const users = yield call(fetchEDITUser, action.payload);
  yield put(editUsersAC(users));
}

function* sagaWatcher() {
  yield takeEvery('USER_INIT_REQ', sagaUserWorker);
  yield takeEvery('ADD_INIT_REQ', sagaAddUserWorker);
  yield takeEvery('DEL_INIT_REQ', sagaDelUserWorker);
  yield takeEvery('EDIT_INIT_REQ', sagaEditUserWorker);
}

export default sagaWatcher;
