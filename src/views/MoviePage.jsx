import React from "react";
import MovieContextProvider from "../contexts/MovieContext";
import MovieList from "../components/movies/MovieList";
import MovieSearch from "../components/movies/MovieSearch";

const MoviePage = () => {
  return (
    <MovieContextProvider>
      <MovieSearch />
      <MovieList />
    </MovieContextProvider>
  );
};

export default MoviePage;