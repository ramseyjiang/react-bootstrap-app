import React, { createContext, useReducer, useCallback, useMemo } from "react";
import { initState, tasksReducer } from "../services/TaskReducer";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, initState);

  const createTask = useCallback(
    task => dispatch({ type: "add", task: task }),
    []
  );

  const deleteTask = useCallback(
    taskId => dispatch({ type: "delete", taskId: taskId }),
    []
  );

  const searchTask = useCallback(
    query => dispatch({ type: "search", query: query }),
    []
  );

  const reloadTask = useCallback(() => dispatch({ type: "reload" }), []);

  const taskApi = useMemo(
    () => ({ state, createTask, deleteTask, searchTask, reloadTask }),
    [state, createTask, deleteTask, searchTask, reloadTask]
  );

  return (
    <TaskContext.Provider value={{ taskApi }}>{children}</TaskContext.Provider>
  );
};

export default TaskContextProvider;
