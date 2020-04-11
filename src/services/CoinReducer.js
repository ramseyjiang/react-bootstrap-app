// Actions
export const LOADING = "LOADING";
export const GET_COIN_SUCCESS = "GET_COIN_SUCCESS";
export const GET_COIN_FAILURE = "GET_COIN_FAILURE";

export const initState = {
  data: {
    btc: "",
    ltc: "",
    eth: "",
  },
  loading: false,
  errorMessage: null,
};

export const coinReducer = (state, action) => {
  switch (action.type) {
    case LOADING: {
      return { ...state, loading: true };
    }
    case GET_COIN_SUCCESS: {
      return {
        ...initState,
        data: {
          btc: action.data.BTC.USD,
          ltc: action.data.LTC.USD,
          eth: action.data.ETH.USD,
        },
      };
    }
    case GET_COIN_FAILURE: {
      return {
        ...initState,
        errorMessage: "Something wrong!",
      };
    }
    default:
      throw new Error();
  }
};
