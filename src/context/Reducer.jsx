export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'fetchData':
      return {
        ...state,
        products: action.payload,
      };

    default:
      break;
  }
};

export const filterProductReducer = (state, action) => {
  switch (action.type) {
    case 'FILTER_BY_CATEGORY':
      return { ...state, byCategory: action.payload };
    case 'FILTER_BY_RATING':
      return { ...state, byRating: action.payload };
    case 'FILTER_BY_SEARCH':
      return { ...state, bySearch: action.payload };
    case 'CLEAR_FILTER':
      return {
        byCategory: 'all',
        byRating: 'all',
        bySearch: '',
      };
    default:
      break;
  }
};
