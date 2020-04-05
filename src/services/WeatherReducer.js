// Actions
export const LOADING = "LOADING";
export const GET_LOCATION_SUCCESS = "GET_LOCATION_SUCCESS";
export const GET_LOCATION_FAILURE = "GET_LOCATION_FAILURE";
export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const GET_WEATHER_FAILURE = "GET_WEATHER_FAILURE";

export const initState = {
  data: null,
  loading: false,
  errorMessage: null
};

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case LOADING: {
      return { ...state, loading: true };
    }
    case GET_WEATHER_SUCCESS: {
      return {
        ...initState,
        data: action.data
      };
    }
    case GET_WEATHER_FAILURE: {
      return {
        ...initState,
        errorMessage: "Something wrong!"
      };
    }
    default:
      throw new Error();
  }
};
