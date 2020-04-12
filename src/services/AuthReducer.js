import {
  getLocal,
  removeLocal,
  setLocal,
} from "../components/common/utils/Storage.js";

export const initAuth = {
  isLoggedIn: false,
  loading: false,
  username: null,
  role: { isAdmin: false, isManager: false, isStaff: false, isClient: true }, //it is used to extension the roles management.
  error: null,
};

// Actions
export const SUCCESS = "SUCCESS";
export const FAIL = "FAIL";
export const LOGOUT = "LOGOUT";
export const LOADING = "LOADING";
export const INIT = "INIT";

export function authReducer(state, action) {
  switch (action.type) {
    case INIT:
      return initAccess();
    case LOADING:
      return { ...state, loading: true };
    case SUCCESS:
      return loginSuccess(action);
    case FAIL:
      return loginFailure(action);
    case LOGOUT:
      return logout();
    default:
      return state;
  }
}

const initAccess = () => {
  let username = getLocal("username");
  return { ...initAuth, isLoggedIn: username !== null, username: username };
};

const loginSuccess = (action) => {
  setLocal("username", action.username);
  return { ...initAuth, isLoggedIn: true, username: action.username };
};

const loginFailure = (action) => {
  setLocal("username", null);
  return { ...initAuth, error: action.error };
};

const logout = () => {
  removeLocal("username");
  return { ...initAuth };
};
