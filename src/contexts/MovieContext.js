import React, { createContext, useState, useMemo } from "react";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  //In this case, it is not convenient to replace useState to useReducer.
  //Because after send a request, it is not convenient to separate success and failure into different actions.
  const [movies, setMovies] = useState({
    data: [],
    loading: false,
    errorMessage: null
  });

  const movieApi = useMemo(() => ({ movies, setMovies }), [movies, setMovies]);

  return (
    <MovieContext.Provider value={{ movieApi }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
