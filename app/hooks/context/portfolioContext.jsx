"use client";
import { useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/portfolioReducer";

// create context for portfolio
const PortfolioContext = createContext();

// context provider
const PortfolioProvider = ({ children }) => {
  const initialState = {};

  const [state, dispatch] = useReducer(reducer, initialState);

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
