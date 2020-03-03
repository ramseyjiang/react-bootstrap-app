import React, { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { Container, Table, Button } from 'react-bootstrap';
import TaskElementEdit from './TaskElementEdit';

const TaskList = () => {
    const { taskApi } = useContext(TaskContext);

    return (
      <Container>
        <h6 md={{ offset: 6 }}>Total tasks is {taskApi.state.counter}</h6>
        <Table>
          <thead>
            <tr>
              <th>Task Title</th>
              <th>Task Creator</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {taskApi.state.tasks.map(task => (
              <tr key={task.id}>
                <td>
                  <TaskElementEdit task={task} elementName="title" />
                </td>
                <td>{task.creator}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => taskApi.deleteTask(task.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  };
  
  export default TaskList;