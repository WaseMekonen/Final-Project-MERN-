import React, { createContext, useReducer } from "react";
import reducer from "../../context/reducer";
import initialState from "../../context/initialState";
import actions from "../../context/actions";

export const AppContext = createContext();

const ProviderWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    ...state,
    setTickes: (payload) => {
      dispatch({ type: actions.SET_TICKETS, payload });
    },
    setAuth: (payload) => {
      dispatch({ type: actions.SET_AUTH, payload });
    },
    setResults: (payload) => {
      dispatch({ type: actions.SET_RESULTS, payload });
    },
    setSearchInputs: (payload) => {
      dispatch({ type: actions.SET_SEARCH_INPUTS, payload });
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ProviderWrapper;
