const PortfolioFilterReducer = (state, action) => {
  switch (action.type) {
    // load all items to filter
    case "LOAD_FILTERED_ITEMS":
      return {
        ...state,
        all_portfolio_items: [...action.payload],
        filter_portfolio_items: [...action.payload],
      };

    // get user's input value from category button and search box and store to state variable
    case "GET_USERS_FILTER_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    // get user's input value from sorting and store to state variable
    case "GET_USERS_SORT_VALUE":
      return {
        ...state,
        filters: {
          ...state.filters,
          sorting_value: action.payload,
        },
      };

    // filter portfolio items
    case "FILTER_PORTFOLIO_ITEMS":
      let { all_portfolio_items } = state;
      const { searchText, category, sorting_value } = state.filters;
      let tempPortfolioItems = [...all_portfolio_items];

      console.log(sorting_value);

      // filter items by search value
      if (searchText) {
        tempPortfolioItems = tempPortfolioItems.filter((currentItem) => {
          return currentItem.siteName.toLowerCase().includes(searchText);
        });
      }

      // filter items by click on category
      if (category !== "all") {
        tempPortfolioItems = tempPortfolioItems.filter((currentItem) => {
          return (
            currentItem.siteCategory.toLowerCase() === category.toLowerCase()
          );
        });
      }

      // filter items by sorting
      if (sorting_value === "a-z") {
        tempPortfolioItems.sort((a, b) => {
          return a.siteName
            .toLowerCase()
            .localeCompare(b.siteName.toLowerCase());
        });
      }
      if (sorting_value === "z-a") {
        tempPortfolioItems.sort((a, b) => {
          return b.siteName
            .toLowerCase()
            .localeCompare(a.siteName.toLowerCase());
        });
      }
      if (sorting_value === "latest") {
        tempPortfolioItems.sort((a, b) => {
          return b.createdAt
            .toLowerCase()
            .localeCompare(a.createdAt.toLowerCase());
        });
      }
      if (sorting_value === "oldest") {
        tempPortfolioItems.sort((a, b) => {
          return a.createdAt
            .toLowerCase()
            .localeCompare(b.createdAt.toLowerCase());
        });
      }

      return {
        ...state,
        filter_portfolio_items: tempPortfolioItems,
      };

    default:
      return state;
  }
};

export default PortfolioFilterReducer;
