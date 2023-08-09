"use client";
import React, { useState } from "react";
import PortfolioFilter from "../components/portfolio/PortfolioFilter";
import PortfolioCard from "../components/portfolio/PortfolioCard";
import PaginationRounded from "../components/pagination/Pagination";
import { usePortfolioFilterHook } from "../hooks/context/portfolioFilterContext";

const Portfolio = () => {
  const { filter_portfolio_items } = usePortfolioFilterHook();

  // pagination
  let itemsPerPage = 9;

  const [pagination, setPagination] = useState({
    from: 0,
    to: itemsPerPage,
  });

  // getting from and to value from pagination components
  const onPaginationChange = (from, to) => {
    setPagination({ from: from, to: to });
  };

  return (
    <>
      <section className="portfolio_wrapper ">
        <div className="container m-auto mt-10 portfolio_title">
          <h2 className="text-3xl text-black font-medium">
            The websites I have built using MERN Stack
          </h2>
        </div>
        <div className="container m-auto my-10">
          <PortfolioFilter />
        </div>
        <div className="container portfolio_section m-auto mb-10">
          <div className="portfolio_items grid grid-cols-3 gap-10">
            {filter_portfolio_items &&
              filter_portfolio_items
                .slice(pagination.from, pagination.to)
                .map((currentPortfolio) => {
                  return (
                    <PortfolioCard
                      key={currentPortfolio._id}
                      {...currentPortfolio}
                    />
                  );
                })}
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center mb-10">
        <div className="pagination">
          <PaginationRounded
            portfolioItems={filter_portfolio_items}
            itemsPerPage={itemsPerPage}
            onPaginationChange={onPaginationChange}
          />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
