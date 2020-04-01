// Actions
export const LOADING = "LOADING";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";
export const INPUT_EMPTY = "INPUT_EMPTY";

export const initState = {
  data: [],
  loading: false,
  errorMessage: null
};

export const moviesReducer = (state, action) => {
  switch (action.type) {
    case LOADING: {
      return { ...state, loading: true };
    }
    case SEARCH_SUCCESS: {
      return {
        ...action.data
      };
    }
    case SEARCH_FAILURE: {
      return {
        ...action.data
      };
    }
    case INPUT_EMPTY: {
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
