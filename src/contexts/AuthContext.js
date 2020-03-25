import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext
} from "react";

import {
  getLocal,
  removeLocal,
  setLocal
} from "../components/common/utils/Storage.js";

import { useHistory } from "react-router-dom";

export const AuthContext = createContext(null);

const initAuth = {};

const AuthContextProvider = ({ children }) => {
  const history = useHistory();
  const [auth, setAuth] = useState(initAuth);

  /* The first time the component is rendered, it tries to
   * fetch the auth from a source, like a cookie or the localStorage.
   */
  useEffect(() => {
    const currentAuth = getLocal("auth");
    if (currentAuth) {
      setAuth(currentAuth);
    }
  }, []);

  const onLogout = () => {
    setAuth(initAuth);
    removeLocal("user");
    history("/");
  };

  const onLogin = newAuth => {
    //todo remove hard code
    let userInfo = {
      username: "ramsey",
      age: 39
    };
    setAuth(newAuth);
    setLocal("user", userInfo);
  };

  const user = getLocal("user");

  const authApi = useMemo(() => ({ auth, user, onLogin, onLogout }), [
    auth,
    user
  ]);

  return (
    <AuthContext.Provider value={authApi}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
