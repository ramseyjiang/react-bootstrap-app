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
    case "empty": {
      return {
        ...state,
        loading: true,
        errorMessage:
          "Please input search movie name or something else for search a movie"
      };
    }
    default:
      throw new Error();
  }
};
