import React, { useState } from 'react';
import { useTaskContext } from '../../contexts/TaskContext';
import { Container, Form, Button } from 'react-bootstrap';
import InputText from '../common/form/InputText';

const TaskForm = () => {
  const { taskApi } = useTaskContext();

  const [task, setTask] = useState({
    title: '',
    creator: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    taskApi.createTask(task);
    setTask({
      title: '',
      creator: ''
    });
  };

  const handleChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <InputText placeholder="Please input title" type="text" label="Title" name="title" value={task.title} onChange={handleChange}/>
          <InputText placeholder="Please input creator" type="text" label="Creator" name="creator" value={task.creator} onChange={handleChange}/>
        </Form.Row>
        <Button variant="primary" type="submit" size="sm">
          Add Task
        </Button>
      </Form>
    </Container>
  );
};

export default TaskForm;
