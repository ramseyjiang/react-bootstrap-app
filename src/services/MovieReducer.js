export const initState = {
  data: [],
  loading: false,
  errorMessage: null
};

export const moviesReducer = (state, action) => {
  switch (action.type) {
    case "loading": {
      return { ...state, loading: true };
    }
    case "success": {
      return {
        ...action.data
      };
    }
    case "failure": {
      return {
        ...action.data
      };
    }
    default:
      throw new Error();
  }
};
