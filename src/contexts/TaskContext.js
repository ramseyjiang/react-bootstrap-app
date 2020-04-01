import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
  useMemo
} from "react";
import {
  initState,
  tasksReducer,
  ADD,
  SEARCH,
  DELETE,
  RELOAD
} from "../services/TaskReducer";

const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, initState);

  const createTask = useCallback(
    task => dispatch({ type: ADD, task: task }),
    []
  );

  const deleteTask = useCallback(
    taskId => dispatch({ type: DELETE, taskId: taskId }),
    []
  );

  const searchTask = useCallback(
    query => dispatch({ type: SEARCH, query: query }),
    []
  );

  const reloadTask = useCallback(() => dispatch({ type: RELOAD }), []);

  const taskApi = useMemo(
    () => ({ state, createTask, deleteTask, searchTask, reloadTask }),
    [state, createTask, deleteTask, searchTask, reloadTask]
  );

  return (
    <TaskContext.Provider value={{ taskApi }}>{children}</TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};

export default TaskContextProvider;
