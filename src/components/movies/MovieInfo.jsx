import React from "react";
import { Card } from "react-bootstrap";

const MovieInfo = ( { movie } ) => {
  return (
    <>
      {movie.Poster !== "N/A" && <Card className='text-center'>
        {movie.Title ? (
          <Card.Header className="movie-poster-title-size">{movie.Title}</Card.Header>
        ) : (
          ""
        )}
        <Card.Img
          className='card-img-top mx-auto d-block'
          variant='top'
          src={movie.Poster}
        />
        {movie.Year ? (
          <Card.Footer>
            <small className="text-muted">Year: {movie.Year}</small>
          </Card.Footer>
        ) : (
          ""
        )}
      </Card>}
    </>
  );
};

export default MovieInfo;