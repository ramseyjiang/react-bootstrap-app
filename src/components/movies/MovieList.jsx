import React from "react";
import { useMovieContext } from "../../contexts/MovieContext";
import MovieInfo from './MovieInfo';
import RenderLoading from '../common/utils/RenderLoading';
import { Row, Col, Alert, Container } from "react-bootstrap";


const MovieList = () => {
    const { movieApi } = useMovieContext();

    return (
      <Container>
        {movieApi.state.loading && !movieApi.state.errorMessage ? (
          <RenderLoading />
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
      </Container>
    );
  };
  
  export default MovieList;