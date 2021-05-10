import {
  INIT_USER,
  CABINET,
  ADD_USER,
  DEL_USER,
  EDIT_USER,
} from '../actionTypes/actionTypes';

export const initUsersAC = (payload) => {
  return {
    type: INIT_USER,
    payload,
  };
};

export const addUsersAC = (payload) => {
  return {
    type: ADD_USER,
    payload,
  };
};

export const delUsersAC = (payload) => {
  return {
    type: DEL_USER,
    payload,
  };
};

export const editUsersAC = (payload) => {
  return {
    type: EDIT_USER,
    payload,
  };
};

export const cabinetAC = (payload) => {
  return {
    type: CABINET,
    payload,
  };
};


export const sagaINITUsers = () => ({ type: 'USER_INIT_REQ' });

export const sagaADDUsers = () => ({ type: 'ADD_INIT_REQ' });

export const sagaDELUsers = () => ({ type: 'DEL_INIT_REQ' });

export const sagaEDITUsers = () => ({ type: 'EDIT_INIT_REQ' });

export const cabinetUsers = () => ({ type: 'CABINET_REQ' });

