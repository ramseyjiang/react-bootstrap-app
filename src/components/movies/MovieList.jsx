import React, { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import MovieInfo from './MovieInfo';
import { Row, Col } from "react-bootstrap";

const MovieList = () => {
    const { movieApi } = useContext(MovieContext);

    return (
      <>
        {movieApi.movies.loading && !movieApi.movies.errorMessage ? (
          <span>loading... </span>
        ) : movieApi.movies.errorMessage ? (
          <div className="errorMessage">{movieApi.movies.errorMessage}</div>
        ) : (
          <Row>
            {movieApi.movies.data && movieApi.movies.data.map((movie, index) => (
              <Col className="col-6 movie-card-bottom" key={index}>
                <MovieInfo movie={movie} />
              </Col>
            ))}
          </Row>
        )}
      </>
    );
  };
  
  export default MovieList;