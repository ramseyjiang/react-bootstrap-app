import React, { useState, useContext } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { MovieContext } from "../../contexts/MovieContext";
import { get } from "../common/utils/Request";

const Search = () => {
  const { movieApi } = useContext(MovieContext);
  const [searchValue, setSearchValue] = useState("");
  const movieApiUrl = "http://www.omdbapi.com/?apikey=f91c3148&s=";

  const handleSearchChange = e => {
    setSearchValue(e.target.value);
  }
  
  const handleSearch = () => {
    movieApi.setMovies ({
      data:[],
      loading: true,
      errorMessage: null
    });

    get(movieApiUrl + searchValue).then(data => {
      if (data.Response === "True") {
        movieApi.setMovies({
          data: data.Search,
          loading: false,
          errorMessage: null
        });
      } else {
        movieApi.setMovies ({
          data:[],
          loading: false,
          errorMessage: data.Error
        });
      }
    });
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