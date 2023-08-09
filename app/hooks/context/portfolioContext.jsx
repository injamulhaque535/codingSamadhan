"use client";
import { useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/portfolioReducer";

// create context for portfolio
const PortfolioContext = createContext();
// API
const PortfolioAPI = process.env.NEXT_PUBLIC_PORTFOLIO_ITEMS_API;

// context provider
const PortfolioProvider = ({ children }) => {
  const initialState = {
    all_pf_items: [],
    filter_pf_items: [],
    filters: {
      category: "all",
      searchText: "",
      sort_items: "latest",
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch Portfolio data from api
  const fetchPortfolioData = async () => {
    const response = await fetch(PortfolioAPI);
    const pf_data = await response.json();

    dispatch({ type: "SET_PF_DATA", payload: pf_data.PortfolioItems });
  };

  // get users input value from url params
  const searchParams = useSearchParams();
  const filterCategoryParams = searchParams.get("category");

  // call useeffect if any changes happend
  const getCategoryParams = () => {
    dispatch({ type: "GET_PF_CATEGORY_PARAMS", payload: filterCategoryParams });
  };

  // call useeffect if any changes happend on filters
  useEffect(() => {
    dispatch({ type: "FILTER_PF_ITEMS" });
  }, [state.filters]);

  // call funtion to fetch api data
  useEffect(() => {
    fetchPortfolioData();
  }, []);

  return (
    <PortfolioContext.Provider value={{ ...state, getCategoryParams }}>
      {children}
    </PortfolioContext.Provider>
  );
};

// custom context to make it easy to use to all other components
const usePortfolioHook = () => {
  return useContext(PortfolioContext);
};

export { PortfolioProvider, PortfolioContext, usePortfolioHook };
