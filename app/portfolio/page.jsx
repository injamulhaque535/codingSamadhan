// "use client";
import PortfolioFilter from "../components/portfolio/PortfolioFilter";
import PaginationRounded from "../components/pagination/Pagination";
import PortfolioCard from "../components/portfolio/PortfolioCard";

const pf_items = async () => {
  let data = await fetch(process.env.NEXT_PUBLIC_PORTFOLIO_ITEMS_API);
  data = await data.json();
  return data.PortfolioItems;
};

const Portfolio = async () => {
  const portfolioData = await pf_items();
  console.log(portfolioData);

  return (
    <>
      <section className="portfolio_wrapper ">
        <div className="container m-auto mt-10 portfolio_title">
          <h2 className="text-3xl text-black font-medium">
            The websites I have built using MERN Stack
          </h2>
        </div>
        <div className="container m-auto my-10">
          <PortfolioFilter portfolioData={portfolioData} />
        </div>
        <div className="container m-auto"></div>
        <div className="container portfolio_section m-auto mb-10">
          <div className="portfolio_items grid grid-cols-3 gap-10">
            {portfolioData &&
              portfolioData.map((currentPortfolio, _id) => {
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
