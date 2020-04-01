import React, {
  createContext,
  useMemo,
  useContext,
  useCallback,
  useReducer
} from "react";
import {
  initState,
  moviesReducer,
  LOADING,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  INPUT_EMPTY
} from "../services/MovieReducer";
import { get } from "../components/common/utils/Request";

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initState);

  const loading = useCallback(() => dispatch({ type: LOADING }), []);

  const searchMovie = useCallback(url => {
    get(url).then(res => {
      if (res.status === true) {
        dispatch({ type: SEARCH_SUCCESS, data: res.result });
      } else {
        dispatch({ type: SEARCH_FAILURE, data: res.result });
      }
    });
  }, []);

  const empty = useCallback(() => dispatch({ type: INPUT_EMPTY }), []);

  const movieApi = useMemo(() => ({ loading, searchMovie, empty, state }), [
    loading,
    searchMovie,
    empty,
    state
  ]);

  return (
    <MovieContext.Provider value={{ movieApi }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};

export default MovieContextProvider;
