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
        data: action.data,
        loading: false,
        errorMessage: null
      };
    }
    case "failure": {
      return {
        data: [],
        loading: false,
        errorMessage: action.error
      };
    }
    default:
      throw new Error();
  }
};
