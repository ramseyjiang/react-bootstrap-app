// Actions
export const LOADING = "LOADING";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";
export const SET_LOAD_MORE = "SET_LOAD_MORE";

export const initState = {
  data: [],
  loading: false,
  errorMessage: null
};

export const endlessReducer = (state, action) => {
  switch (action.type) {
    case LOADING: {
      return { ...state, loading: true };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...initState,
        data: action.data
      };
    }
    case GET_DATA_FAILURE: {
      return {
        ...initState,
        errorMessage: "Something wrong!"
      };
    }
    case SET_LOAD_MORE: {
      return {
        ...initState,
        data: [...state.data, ...action.data]
      };
    }
    default:
      throw new Error();
  }
};
