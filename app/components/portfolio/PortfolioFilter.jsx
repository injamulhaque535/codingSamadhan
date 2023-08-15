import "./styles.scss";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import Link from "next/link";

const PortfolioFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
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

  // create url query string for all filters
  const createQueryString = useCallback((name, value) => {
    const params = new URLSearchParams(searchparams);
    params.set(name, value);
    return params.toString();
  });

  // searchFilter query set
  const getFilterSearchValue = (event) => {
    const getVal = event.target.value;
    router.push(pathname + "?" + createQueryString("search", getVal));
  };

  // sortFilter query set
  const getFilterSortValue = (event) => {
    const getVal = event.target.value;
    router.push(pathname + "?" + createQueryString("sort", getVal));
  };

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
                    pathname + "?" + createQueryString("category", currentItem)
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
            <input
              type="text"
              name="searchText"
              placeholder="Search..."
              className=" w-4/5 border border-border py-2 px-3 rounded-full outline-0"
              onChange={getFilterSearchValue}
            />
          </div>
        </div>
        <div className="pf_sort_filter w-1/12">
          <div className="pf_sort_box text-right">
            <select
              name="portfolioSort"
              id="portfolioSort"
              onClick={getFilterSortValue}
              className="pf_sort_select border border-border text-black rounded-full py-2 px-5 outline-none cursor-pointer appearance-none w-full"
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilter;
