import axios from "axios";

export function getSection() {
  return async function (dispatch) {
    try {
      let getSection = await axios.get(
        "http://localhost:1337/api/sections?populate=videos&&populate=images"
      );
      return dispatch({
        type: "GET_SECTION",
        payload: getSection.data,
      });
    } catch (error) {
      alert("Sections not found");
    }
  };
}

export function getSectionID(id) {
  return async function (dispatch) {
    try {
      let getSectionId = await axios.get(
        `http://localhost:1337/api/sections/${id}/?populate=videos&populate=images`
      );
      return dispatch({
        type: "GET_SECTION_ID",
        payload: getSectionId.data,
      });
    } catch (error) {
      alert("Sections id not found");
    }
  };
}

// Filtros por categoria

export function filterByCategory(category) {
  return async function (dispatch) {
    try {
      let filterByCategory = await axios.get(
        `http://localhost:1337/api/sections?filters[category][$eq]=${category}&&populate=videos&&populate=images`
      );

      return dispatch({
        type: "GET_FILTER_BY_CATEGORY",
        payload: filterByCategory.data,
      });
    } catch (error) {
      alert("No hay secciones con categoria Primera");
    }
  };
}

export function deleteCategory() {
  return {
    type: "DELETE_CATEGORY",
  };
}
