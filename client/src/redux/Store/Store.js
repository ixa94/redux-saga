// подключаем applyMiddleware для того что браузер считал saga, это midleware
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


import createSagaMiddleware from 'redux-saga';
import sagasWatcher from '../Saga/saga';


const sagaMiddleware = createSagaMiddleware();

//! вызываем в Store
const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(sagaMiddleware)));



//!Redux Saga (запуск)
sagaMiddleware.run(sagasWatcher)

export default store;
