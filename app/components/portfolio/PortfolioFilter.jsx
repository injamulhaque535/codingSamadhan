import "./styles.scss";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PortfolioFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchparams = useSearchParams();
  const [pfItem, setPfItem] = useState([]);

  // call api
  useEffect(() => {
    const getPfItems = async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_PORTFOLIO_ITEMS_API);
      const data = await response.json();
      setPfItem(data.PortfolioItems);
    };
    getPfItems();
  }, []);

  // get category name from api
  let categoryName = pfItem.map((currentItem) => {
    return currentItem.siteCategory;
  });
  const uniqueCategoryName = ["all", ...new Set(categoryName)];

  // create url query string
  const createQueryString = useCallback((name, value) => {
    const params = new URLSearchParams(searchparams);
    params.set(name, value);
    return params.toString();
  });

  return (
    <div className="pf_filter p-6 rounded-md">
      <div className="pf_filter_content flex justify-center items-center">
        <div className="pf_category_filter w-9/12">
          <div className="pf_category_items">
            {uniqueCategoryName.map((currentItem, index) => {
              return (
                <Link
                  key={index}
                  className="pf_category_items_link capitalize hover:text-hover"
                  href={
                    pathname +
                    "?" +
                    createQueryString("siteCategory", currentItem)
                  }
                >
                  {currentItem}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="pf_search_filter w-2/12">
          <div className="pf_search_box">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="searchText"
                placeholder="Search..."
                className=" w-4/5 border border-border py-2 px-3 rounded-full outline-0"
                // value={searchText}
                // onChange={getFilterValue}
              />
            </form>
          </div>
        </div>
        <div className="pf_sort_filter w-1/12">
          <div className="pf_sort_box text-right">
            <form onSubmit={(e) => e.preventDefault()}>
              <select
                name="portfolioSort"
                id="portfolioSort"
                // onClick={sortingPortfolioItems}
                className="pf_sort_select border border-border text-black rounded-full py-2 px-5 outline-none cursor-pointer appearance-none w-full"
              >
                <option value="#">Sort...</option>
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilter;
