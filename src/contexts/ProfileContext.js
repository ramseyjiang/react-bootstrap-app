import React, {
  createContext,
  useMemo,
  useContext,
  useCallback,
  useReducer,
} from "react";
import {
  initState,
  profileReducer,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from "../services/ProfileReducer";
import { get } from "../components/common/utils/Request";

const ProfileContext = createContext();

const ProfileContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initState);

  const GITHUB_API_URL = "https://api.github.com/users/";
  const username = "ramseyjiang";

  const getProfile = useCallback(() => {
    get(GITHUB_API_URL + username).then((result) => {
      try {
        dispatch({ type: GET_PROFILE_SUCCESS, data: result });
      } catch {
        dispatch({ type: GET_PROFILE_FAILURE, data: result });
      }
    });
  }, [GITHUB_API_URL]);

  const profileApi = useMemo(() => ({ state, getProfile }), [
    state,
    getProfile,
  ]);

  return (
    <ProfileContext.Provider value={{ profileApi }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => {
  return useContext(ProfileContext);
};

export default ProfileContextProvider;
