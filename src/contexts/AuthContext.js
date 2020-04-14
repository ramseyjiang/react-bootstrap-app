import React, {
  createContext,
  useCallback,
  useMemo,
  useContext,
  useEffect,
  useReducer,
} from "react";

import {
  initAuth,
  authReducer,
  INIT,
  LOADING,
  SUCCESS,
  FAIL,
  LOGOUT,
} from "../services/AuthReducer";

import firebase, { googleProvider, fbProvider } from "../firebase";

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

  const firebaseRegister = useCallback(async (register) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(register.email, register.password)
      .then((res) => {
        if (res.user) {
          return dispatch({
            type: SUCCESS,
            username: register.username,
          });
        }
      })
      .catch((e) => {
        return dispatch({ type: FAIL, error: e.message });
      });
  }, []);

  const firebaseLogin = useCallback(async (login) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(login.email, login.password)
      .then((res) => {
        if (res.user) {
          return dispatch({ type: SUCCESS, username: login.email });
        }
      })
      .catch((e) => {
        return dispatch({ type: FAIL, error: e.message });
      });
  }, []);

  const socialSignIn = useCallback(async (socialMedia) => {
    if (socialMedia === "google") {
      socialMedia = googleProvider;
      socialMedia.addScope("https://www.googleapis.com/auth/plus.login");
    } else {
      socialMedia = fbProvider;
    }

    firebase
      .auth()
      .signInWithPopup(socialMedia)
      .then((res) => {
        return dispatch({ type: SUCCESS, username: res.user.displayName });
      })
      .catch((error) => {
        return dispatch({ type: FAIL, error: error.message });
      });
  }, []);

  const logout = useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        return dispatch({ type: LOGOUT });
      })
      .catch((e) => {
        return dispatch({ type: FAIL, error: e.message });
      });
  }, []);

  const authApi = useMemo(
    () => ({
      state,
      loading,
      logout,
      firebaseRegister,
      firebaseLogin,
      socialSignIn,
    }),
    [logout, firebaseRegister, firebaseLogin, socialSignIn, state]
  );

  return (
    <AuthContext.Provider value={{ authApi }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
