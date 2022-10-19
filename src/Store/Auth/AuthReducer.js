import { ERROR, SUCCESS, LOADING } from "./Actions";

const AuthInitialState = {
  loading: false,
  error: false,
  isAuth: false,
};

export const AuthReducer = (state = AuthInitialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        isAuth: false,
        error: false,
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        error: false,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        isAuth: false,
      };
      default:
       return state
  }
};
