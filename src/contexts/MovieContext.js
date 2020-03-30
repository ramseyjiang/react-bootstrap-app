import React, { createContext, useMemo, useCallback, useReducer } from "react";
import { initState, moviesReducer } from "../services/MovieReducer";
import { get } from "../components/common/utils/Request";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initState);

  const loading = useCallback(() => dispatch({ type: "loading" }), []);

  const searchMovie = useCallback(url => {
    get(url).then(data => {
      if (data.status === true) {
        dispatch({ type: "success", data: data });
      } else {
        dispatch({ type: "failure", data: data });
      }
    });
  }, []);

  const movieApi = useMemo(() => ({ loading, searchMovie, state }), [
    loading,
    searchMovie,
    state
  ]);

  return (
    <MovieContext.Provider value={{ movieApi }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
