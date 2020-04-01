import React, {
  createContext,
  useCallback,
  useMemo,
  useContext,
  useEffect,
  useReducer
} from "react";

import {
  initAuth,
  authReducer,
  INIT,
  LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from "../services/AuthReducer";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initAuth);

  //The first time a user visits the website, it will only run once.
  //The other scenario, a user closed website without logout, after the user come back, it will auto login.
  useEffect(() => {
    if (state.username === null) {
      dispatch({ type: INIT });
    }
  }, [state.username]);

  const loading = () => dispatch({ type: LOADING });

  const login = useCallback(username => {
    if (username === "ramsey") {
      return dispatch({ type: LOGIN_SUCCESS, username: username });
    } else {
      return dispatch({ type: LOGIN_FAIL, error: "User not found!" });
    }
  }, []);

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  // A fake authenticator to mock async api call
  const apiLogin = useCallback(async username => {
    await delay(2000);
    if (username === "ramsey") {
      return dispatch({ type: LOGIN_SUCCESS, username: username });
    } else {
      return dispatch({ type: LOGIN_FAIL, error: "User not found!" });
    }
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: LOGOUT });
  }, []);

  const authApi = useMemo(() => ({ state, loading, logout, login, apiLogin }), [
    logout,
    login,
    apiLogin,
    state
  ]);

  return (
    <AuthContext.Provider value={{ authApi }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
