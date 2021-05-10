export const sagaINITUsers = () => ({ type: 'USER_INIT_REQ' });

export const sagaADDUsers = payload => ({ type: 'ADD_INIT_REQ' ,payload});

export const sagaDELUsers = (payload) => ({ type: 'DEL_INIT_REQ',payload });

export const sagaEDITUsers = (payload) => ({ type: 'EDIT_INIT_REQ',payload });

export const cabinetUsers = () => ({ type: 'CABINET_REQ' });
