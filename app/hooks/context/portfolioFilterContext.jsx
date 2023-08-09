import { createContext, useContext, useEffect, useReducer } from "react";
import { usePortfolioHook } from "./portfolioContext";
import reducer from "../reducer/portfolioFilterReducer";

const PortfolioFilterContext = createContext();

const PortfolioFilterProvider = ({ children }) => {
  const initialState = {
    all_portfolio_items: [],
    filter_portfolio_items: [],
    filters: {
      category: "all",
      searchText: "",
      sorting_value: "latest",
    },
  };

  const { portfolioItems } = usePortfolioHook();
  const [state, dispatch] = useReducer(reducer, initialState);

  // handle user input value
  // get value
  const getFilterValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // dispatch the value
    return dispatch({
      type: "GET_USERS_FILTER_VALUE",
      payload: { name, value },
    });
  };

  // get and store users selected value to "sorting_value" state variable for sorting
  const sortingPortfolioItems = (event) => {
    const userSortValue = event.target.value;
    return dispatch({ type: "GET_USERS_SORT_VALUE", payload: userSortValue });
  };

  // call useeffect if any changes happend
  useEffect(() => {
    dispatch({ type: "FILTER_PORTFOLIO_ITEMS" });
  }, [state.filters]);

  // load items for filter out
  useEffect(() => {
    dispatch({ type: "LOAD_FILTERED_ITEMS", payload: portfolioItems });
  }, [portfolioItems]);

  return (
    <PortfolioFilterContext.Provider
      value={{ ...state, getFilterValue, sortingPortfolioItems }}
    >
      {children}
    </PortfolioFilterContext.Provider>
  );
};

// create custom hook for easy to use
export const usePortfolioFilterHook = () => {
  return useContext(PortfolioFilterContext);
};

export { PortfolioFilterProvider };
