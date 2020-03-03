import React, { useState, useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const TaskSearch = () => {
  const { taskApi } = useContext(TaskContext);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const search = () => {
    taskApi.searchTask(searchValue);
  };

  const refresh = () => {
    taskApi.reloadTask();
    setSearchValue("");
  }

  return (
    <Container>
      <Form>
        <Form.Group as={Row}>
          <Col sm={8}>
            <Form.Control type="text" placeholder="Input search content" onChange={handleChange} value={searchValue}/>
          </Col>
          <Col sm={4}>
            <Button variant="primary" type="button" size="sm" onClick={search}>Search</Button>{' '}
            <Button variant="success" type="button" size="sm" onClick={refresh}>Refresh</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default TaskSearch;
