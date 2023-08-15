"use client";
import PortfolioFilter from "../components/portfolio/PortfolioFilter";
import PaginationRounded from "../components/pagination/Pagination";
import PortfolioCard from "../components/portfolio/PortfolioCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Portfolio = () => {
  const [pfItems, setPfItems] = useState([]);
  const [totalPfItemsCount, setTotalPfItemsCount] = useState([]);
  const searchParams = useSearchParams();
  const getFilterSearchParam = searchParams.get("search") || "";
  const getFilterSortParam = searchParams.get("sort") || "";
  const getPageNumberParam = searchParams.get("page") || "";
  let getFilterCategoryParam = searchParams.get("category") || "";

  // handle all categories
  if (getFilterCategoryParam == "all") {
    getFilterCategoryParam = "";
  }

  // fetch api for get filtered items
  const getFilteredItems = async () => {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_PORTFOLIO_ITEMS_API
      }?siteCategory=${getFilterCategoryParam}&&siteName=${getFilterSearchParam}&&sort=${
        getFilterSortParam || "latest"
      }&&page=${getPageNumberParam}`
    );

    const data = await response.json();
    setPfItems(data.PortfolioItems);
    setTotalPfItemsCount(data.totalPfItems);
  };

  // call api function with condition
  useEffect(() => {
    getFilteredItems();
  }, [
    getFilterCategoryParam,
    getFilterSearchParam,
    getFilterSortParam,
    getPageNumberParam,
  ]);

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
            {pfItems &&
              pfItems.map((currentPortfolio, _id) => {
                return (
                  <PortfolioCard key={_id} portfolioData={currentPortfolio} />
                );
              })}
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center mb-10">
        <div className="pagination">
          <PaginationRounded totalPfItemsCount={totalPfItemsCount} />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
