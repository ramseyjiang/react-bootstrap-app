// Actions
export const LOADING = "LOADING";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE";

export const initState = {
  data: null,
  loading: false,
  errorMessage: null,
};

export const profileReducer = (state, action) => {
  switch (action.type) {
    case LOADING: {
      return { ...state, loading: true };
    }
    case GET_PROFILE_SUCCESS: {
      return {
        ...initState,
        data: action.data,
      };
    }
    case GET_PROFILE_FAILURE: {
      return {
        ...initState,
        errorMessage: "Something wrong!",
      };
    }
    default:
      throw new Error();
  }
};
