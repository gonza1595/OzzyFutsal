const initialState = {
  sections: [],
  allSections: [],
  sectionID: [],
  filterByCategory: [],
  currentPage: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_SECTION":
      return {
        ...state,
        sections: action.payload,
        allSections: action.payload,
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
    case "GET_SECTION_TITLE":
      return {
        ...state,
        sections: action.payload,
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
