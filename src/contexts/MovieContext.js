import React, { createContext, useMemo, useCallback, useReducer } from "react";
import { initState, moviesReducer } from "../services/MovieReducer";
import { get } from "../components/common/utils/Request";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initState);

  const loading = useCallback(() => dispatch({ type: "loading" }), []);

  const searchMovie = useCallback(url => {
    get(url).then(res => {
      if (res.status === true) {
        dispatch({ type: "success", data: res.result });
      } else {
        dispatch({ type: "failure", data: res.result });
      }
    });
  }, []);

  const empty = useCallback(() => dispatch({ type: "empty" }), []);

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

export default MovieContextProvider;
