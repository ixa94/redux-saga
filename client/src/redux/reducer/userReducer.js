import { INIT_USER,DEL_USER,ADD_USER,EDIT_USER } from '../actionTypes/actionTypes'

const initialState = { title: 'Users', user: [] }
function userReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_USER:
      return { ...state, user: action.payload }

      case ADD_USER:
      return { ...state, user: [...state.user, action.payload] };

      case DEL_USER:
        return {
          ...state,
          user: [...state.user].filter((el) => el._id !== action.payload),
        };

        case EDIT_USER:
      return {
        ...state,
        user: [...state.user].map((el) =>
          el._id === action.payload._id
            ? { ...el, name: action.payload.name, age: action.payload.age,height:action.payload.height }
            : el
        ),
      };

    default:
      return state
  }
}

export default userReducer;
