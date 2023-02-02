const initialState = {
  sections: [],

  sectionID: [],
  filterByCategory: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_SECTION":
      return {
        ...state,
        sections: action.payload,
      };
    case "GET_SECTION_ID":
      return {
        ...state,
        sectionID: action.payload,
      };
    case "GET_FILTER_BY_CATEGORY":
      return {
        ...state,
        filterByCategory: action.payload,
      };
    case "DELETE_CATEGORY":
      return {
        ...state,
        filterByCategory: [],
      };

    default:
      return state;
  }
}

export default rootReducer;
