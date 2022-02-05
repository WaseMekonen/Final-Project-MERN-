import actions from "./actions";

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actions.SET_AUTH:
      return {
        ...state,
        auth: action.payload,
      };
    case actions.SET_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case actions.SET_SEARCH_INPUTS:
      return {
        ...state,
        searchInputs: action.payload,
      };
    case actions.SET_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
