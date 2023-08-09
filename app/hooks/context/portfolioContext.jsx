import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/portfolioReducer";

// create context for portfolio
const PortfolioContext = createContext();

// API
const PortfolioAPI = process.env.NEXT_PUBLIC_PORTFOLIO_ITEMS_API;

// context provider
const PortfolioProvider = ({ children }) => {
  // define initial state
  const initialState = {
    // isLoading: false,
    isError: false,
    portfolioItems: [],
  };

  //   useReducer hook for manage states
  const [state, dispatch] = useReducer(reducer, initialState);
  // Fetch Portfolio data from api
  const getPortfolio = async (url) => {
    try {
      const response = await axios.get(url);
      const portfolioData = await response.data;

      dispatch({
        type: "SET_PORTFOLIO_DATA",
        payload: portfolioData,
      });
    } catch (error) {
      dispatch({
        type: "SHOW_ERROR",
      });
    }
  };

  //   Auto call API function
  useEffect(() => {
    getPortfolio(PortfolioAPI);
  }, []);

  return (
    <PortfolioContext.Provider value={{ ...state }}>
      {children}
    </PortfolioContext.Provider>
  );
};

// custom context to make it easy to use to all other components
const usePortfolioHook = () => {
  return useContext(PortfolioContext);
};

export { PortfolioProvider, PortfolioContext, usePortfolioHook };
