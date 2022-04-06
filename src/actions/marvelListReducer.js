const defaultState = {
  loading: false,
  data: [],
};

const MarvelListReducer = (state, action) => {
  switch (action.type) {
    case "FAVOURITE_LIST_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FAVOURITE_LIST_FAIL":
      return {
        ...state,
        loading: false,
      };
    case "FAVOURITE_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
