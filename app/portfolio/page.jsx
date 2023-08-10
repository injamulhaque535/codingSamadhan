"use client";
import PortfolioFilter from "../components/portfolio/PortfolioFilter";
import PaginationRounded from "../components/pagination/Pagination";
import PortfolioCard from "../components/portfolio/PortfolioCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Portfolio = () => {
  const [pfItem, setPfItem] = useState([]);
  const searchParams = useSearchParams();
  const getCategoryParam = searchParams.get("siteCategory") || "";

  // fetch api for get filtered items
  const getFilteredItems = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PORTFOLIO_ITEMS_API}?siteCategory=${getCategoryParam}`
    );
    const data = await response.json();
    setPfItem(data.PortfolioItems);
  };

  // fetch api for all items
  const getAllItems = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_PORTFOLIO_ITEMS_API);

    const data = await response.json();
    setPfItem(data.PortfolioItems);
  };

  // call api function with condition
  useEffect(() => {
    if (getCategoryParam !== "all") {
      getFilteredItems();
    } else {
      getAllItems();
    }
  }, [getCategoryParam]);

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
        <div className="container m-auto"></div>
        <div className="container portfolio_section m-auto mb-10">
          <div className="portfolio_items grid grid-cols-3 gap-10">
            {pfItem &&
              pfItem.map((currentPortfolio, _id) => {
                return (
                  <PortfolioCard key={_id} portfolioData={currentPortfolio} />
                );
              })}
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center mb-10">
        <div className="pagination">
          <PaginationRounded />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
