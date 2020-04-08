export const LOADING = "LOADING";
export const GET_LATEST_SUCCESS = "GET_LATEST_SUCCESS";
export const GET_LATEST_FAILURE = "GET_LATEST_FAILURE";

const CURRENCIES = ["AUD", "CNY", "NZD", "SGD"];

export const initState = {
  data: {
    initialized: false,
    rates: {},
    base: "USD",
    tableKeys: {
      AUD: "AUD",
      CNY: "CNY",
      NZD: "NZD",
      SGD: "SGD"
    },
    barData: {}
  },
  loading: false,
  errorMessage: null
};

export const exchangeReducer = (state, action) => {
  switch (action.type) {
    case LOADING: {
      return { ...state, loading: true };
    }
    case GET_LATEST_SUCCESS: {
      return {
        ...initState,
        data: {
          initialized: true,
          rates: action.data.rates,
          base: action.data.base,
          barData: generateBarData(action.data.rates),
          tableKeys: initState.data.tableKeys
        }
      };
    }
    case GET_LATEST_FAILURE: {
      return {
        ...initState,
        errorMessage: "Something wrong!"
      };
    }
    default:
      throw new Error();
  }
};

const generateBarData = rates => {
  let filteredRates = Object.keys(rates).filter(key =>
    CURRENCIES.includes(key)
  );

  return {
    labels: filteredRates,
    datasets: [
      {
        backgroundColor: "green",
        data: filteredRates.map(key => rates[key])
      }
    ]
  };
};
