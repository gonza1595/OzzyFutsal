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
      alert("No hay secciones cargadas");
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
      alert("No se encuentra la seccion con ese ID");
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
      alert("No hay secciones con la categoria seleccionada");
    }
  };
}
export function getSectionName(title) {
  return async function (dispatch) {
    try {
      let getSectionName = await axios.get(
        `http://localhost:1337/api/sections?filters[title][$eq]=${title}&&populate=videos&&populate=images`
      );

      return dispatch({
        type: "GET_SECTION_NAME",
        payload: getSectionName.data,
      });
    } catch (error) {
      alert("No hay secciones con el nombre buscado");
    }
  };
}

export function deleteCategory() {
  return {
    type: "DELETE_CATEGORY",
  };
}
