import axios from "axios";

export function getSection() {
  return async function (dispatch) {
    try {
      let getSection = await axios.get(
        "http://localhost:1337/api/sections?populate=videos&&populate=images&&pagination[page]=1&pagination[pageSize]=1000"
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

export function getSectionVideoID(id, videoId) {
  return async function (dispatch) {
    try {
      let getSectionVideoId = await axios.get(
        `http://localhost:1337/api/sections/${id}/?populate[videos][filters][id][$eq]=${videoId}`
      );
      return dispatch({
        type: "GET_SECTION_VIDEO_ID",
        payload: getSectionVideoId.data,
      });
    } catch (error) {
      alert("No se encuentra ese video en esta seccion");
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
