import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useMovieContext } from "../../contexts/MovieContext";

const Search = () => {
  const { movieApi } = useMovieContext();
  const [searchValue, setSearchValue] = useState("");
  const MOVIE_API_URL = "https://www.omdbapi.com/?apikey=f91c3148&s=";
  const DEFAULT_SEARCH = "Fast&Furious";

  const handleSearchChange = e => {
    setSearchValue(e.target.value);
  }

  // movieApi.searchMovie(MOVIE_API_URL + DEFAULT_SEARCH);
  useEffect(()=>{
    if(searchValue === '') {
      movieApi.searchMovie(MOVIE_API_URL + DEFAULT_SEARCH)
    } 
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    movieApi.loading();
    if(searchValue !== '') {
      movieApi.searchMovie(MOVIE_API_URL + searchValue)
    } else {
      movieApi.empty();
    }
  }

  return (
    <Container>
      <Form>
        <Form.Group as={Row}>
          <Col sm={8}>
            <Form.Control type="text" placeholder="Input movie title, for example: Fast&Furious" onChange={handleSearchChange} value={searchValue}/>
          </Col>
          <Col sm={4}>
            <Button variant="primary" type="submit" size="sm" onClick={handleSearch}>Search</Button>{' '}
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Search;