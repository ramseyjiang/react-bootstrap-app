import React, {
  createContext,
  useMemo,
  useContext,
  useCallback,
  useReducer,
} from "react";
import {
  initState,
  endlessReducer,
  LOADING,
  SET_LOAD_MORE,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
} from "../services/EndlessReducer";
import { get } from "../components/common/utils/Request";

const EndlessContext = createContext();

const EndlessContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(endlessReducer, initState);

  const loading = useCallback(() => dispatch({ type: LOADING }), []);

  const getData = useCallback((url) => {
    get(url).then((result) => {
      try {
        dispatch({ type: GET_DATA_SUCCESS, data: result.message });
      } catch {
        dispatch({ type: GET_DATA_FAILURE, data: result.message });
      }
    });
  }, []);

  const moreData = useCallback(
    (url) => {
      get(url).then((result) => {
        try {
          dispatch({
            type: SET_LOAD_MORE,
            data: result.message,
          });
        } catch {
          dispatch({ type: GET_DATA_FAILURE, data: state.data.result });
        }
      });
    },
    [state]
  );

  const isScrolling = useCallback(
    (url) => {
      if (
        window.innerHeight + Math.ceil(document.documentElement.scrollTop) !==
        document.documentElement.offsetHeight
      ) {
        return;
      } else {
        moreData(url);
      }
    },
    [moreData]
  );

  const endlessApi = useMemo(
    () => ({ state, getData, moreData, loading, isScrolling }),
    [state, getData, moreData, loading, isScrolling]
  );

  return (
    <EndlessContext.Provider value={{ endlessApi }}>
      {children}
    </EndlessContext.Provider>
  );
};

export const useEndlessContext = () => {
  return useContext(EndlessContext);
};

export default EndlessContextProvider;
