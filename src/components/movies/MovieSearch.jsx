import React, { useState, useContext } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { MovieContext } from "../../contexts/MovieContext";

const Search = () => {
  const { movieApi } = useContext(MovieContext);
  const [searchValue, setSearchValue] = useState("");
  const MOVIE_API_URL = "http://www.omdbapi.com/?apikey=f91c3148&s=";

  const handleSearchChange = e => {
    setSearchValue(e.target.value);
  }

  const handleSearch = () => {
    movieApi.loading();
    movieApi.searchMovie(MOVIE_API_URL + searchValue);
  }

  return (
    <Container>
      <Form>
        <Form.Group as={Row}>
          <Col sm={8}>
            <Form.Control type="text" placeholder="Input movie title" onChange={handleSearchChange} value={searchValue}/>
          </Col>
          <Col sm={4}>
            <Button variant="primary" type="button" size="sm" onClick={handleSearch}>Search</Button>{' '}
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Search;