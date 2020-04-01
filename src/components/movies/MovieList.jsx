import React from "react";
import { useMovieContext } from "../../contexts/MovieContext";
import MovieInfo from './MovieInfo';
import { Row, Col, Alert } from "react-bootstrap";

const MovieList = () => {
    const { movieApi } = useMovieContext();

    return (
      <>
        {movieApi.state.loading && !movieApi.state.errorMessage ? (
          <span>loading... </span>
        ) : movieApi.state.errorMessage ? (
          <Alert variant='danger'>{movieApi.state.errorMessage}</Alert>
        ) : (
          <Row>
            {movieApi.state.data && movieApi.state.data.map((movie, index) => (
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