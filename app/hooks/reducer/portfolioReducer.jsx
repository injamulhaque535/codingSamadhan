const PortfolioReducer = (state, action) => {
  // change states by condition
  switch (action.type) {
    //  load portfolio data
    case "SET_PORTFOLIO_DATA":
      return {
        ...state,
        portfolioItems: action.payload,
      };
    // error handel
    case "SHOW_ERROR":
      return {
        isError: true,
      };
    default:
      return state;
  }
};

export default PortfolioReducer;
