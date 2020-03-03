import React from "react";
import TaskContextProvider from "../contexts/TaskContext";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import TaskSearch from "../components/tasks/TaskSearch";

const TaskPage = () => {
  return (
    <TaskContextProvider>
      <TaskSearch />
      <TaskList />
      <TaskForm />
    </TaskContextProvider>
  );
};

export default TaskPage;
