const PortfolioReducer = (state, action) => {
  switch (action.type) {
    case "SET_PF_DATA":
      return {
        ...state,
        all_pf_items: [...action.payload],
        filter_pf_items: [...action.payload],
      };

    case "GET_PF_CATEGORY_PARAMS":
      return {
        ...state,
        filters: {
          ...state.filters,
          category: action.payload,
        },
      };

    case "FILTER_PF_ITEMS":
      const { all_pf_items } = state;
      const { category } = state.filters;

      let tempPFItems = [...all_pf_items];

      if (category !== "all") {
        tempPFItems = tempPFItems.filter((currentItem) => {
          return category === currentItem.siteCategory.toLowerCase();
        });
      }

      return {
        ...state,
        filter_pf_items: tempPFItems,
      };

    default:
      return state;
  }
};

export default PortfolioReducer;
