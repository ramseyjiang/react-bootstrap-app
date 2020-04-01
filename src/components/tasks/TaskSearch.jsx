import React, { useState } from "react";
import { useTaskContext } from "../../contexts/TaskContext";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const TaskSearch = () => {
  const { taskApi } = useTaskContext();
  const [searchValue, setSearchValue] = useState("");

  const search = (e) => {
    e.preventDefault();
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
            <Form.Control type="text" placeholder="Input search content" onChange={e => (setSearchValue(e.target.value))} value={searchValue}/>
          </Col>
          <Col sm={4}>
            <Button variant="primary" type="submit" size="sm" onClick={search}>Search</Button>{' '}
            <Button variant="success" type="button" size="sm" onClick={refresh}>Refresh</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default TaskSearch;
