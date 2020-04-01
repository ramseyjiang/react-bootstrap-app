import uniqid from "uniqid";

// Actions
export const ADD = "ADD";
export const DELETE = "DELETE";
export const SEARCH = "SEARCH";
export const RELOAD = "RELOAD";

export const initState = {
  counter: 2,
  tasks: [
    {
      id: 1,
      title: "Default task1",
      creator: "ramsey"
    },
    {
      id: 2,
      title: "Default task2",
      creator: "davy"
    }
  ], //originalTasks is used to show the original data after click search button.
  originalTasks: [
    {
      id: 1,
      title: "Default task1",
      creator: "ramsey"
    },
    {
      id: 2,
      title: "Default task2",
      creator: "davy"
    }
  ]
};

export const tasksReducer = (state, action) => {
  switch (action.type) {
    case ADD: {
      return addTask(state, action);
    }

    case DELETE: {
      return deleteTask(state, action);
    }

    case SEARCH: {
      return searchTask(state, action);
    }

    case RELOAD: {
      return reloadTask(state, action);
    }
    default:
      return state;
  }
};

const addTask = (state, action) => {
  const newCounter = state.counter + 1;

  const newTask = {
    id: uniqid(),
    title: action.task.title,
    creator: action.task.creator
  };

  return {
    counter: newCounter,
    tasks: [...state.tasks, newTask],
    originalTasks: [...state.tasks, newTask]
  };
};

const deleteTask = (state, action) => {
  return {
    counter: state.counter - 1,
    tasks: state.tasks.filter(task => {
      return task.id !== action.taskId;
    }),
    originalTasks: state.originalTasks.filter(task => {
      return task.id !== action.taskId;
    })
  };
};

const searchTask = (state, action) => {
  let tasks =
    state.originalTasks.length > state.tasks.length
      ? (state.tasks = state.originalTasks)
      : state.tasks;

  tasks = action.query.length
    ? tasks.filter(task => {
        return (
          task.title.includes(action.query) ||
          task.creator.includes(action.query)
        );
      })
    : tasks;

  return {
    counter: tasks.length,
    tasks: tasks,
    originalTasks: state.originalTasks
  };
};

const reloadTask = (state, action) => {
  return {
    counter: state.originalTasks.length,
    tasks: state.originalTasks,
    originalTasks: state.originalTasks
  };
};
