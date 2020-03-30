import React, { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import MovieInfo from './MovieInfo';
import { Row, Col } from "react-bootstrap";

const MovieList = () => {
    const { movieApi } = useContext(MovieContext);

    return (
      <>
        {movieApi.state.loading && !movieApi.state.errorMessage ? (
          <span>loading... </span>
        ) : movieApi.state.errorMessage ? (
          <div className="errorMessage">{movieApi.state.errorMessage}</div>
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