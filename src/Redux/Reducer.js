const initialState = {
  sections: [],
  sectionID: [],
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
    default:
      return state;
  }
}

export default rootReducer;
