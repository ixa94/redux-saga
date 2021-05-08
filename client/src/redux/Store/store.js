// подключаем applyMiddleware для того что браузер считал saga, это midleware
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

//!подключаем redux-saga
import createSagaMiddleware from 'redux-saga';
import sagasWatcher from '../Saga/saga';

//! создаем SAGA middleware
const sagaMiddleware = createSagaMiddleware();

//! вызываем в Store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

//!Redux Saga (запуск)
sagaMiddleware.run(sagasWatcher)

export default store;
