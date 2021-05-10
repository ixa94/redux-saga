import { combineReducers } from 'redux'

// импорт дочерних reducer
import userReducer from './userReducer'
//import studentsReducer from './studentsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  //: studentsReducer
})

export default rootReducer
