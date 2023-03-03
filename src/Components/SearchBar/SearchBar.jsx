import React from "react";
import "./SearchBar.css";

export default function SearchBar({
  setPage,
  setSearchTerm,
  nameSearch,
  setNameSearch,
}) {
  const handleSearch = (event) => {
    setNameSearch(event.target.value);
    setSearchTerm("");
    setPage(1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(nameSearch);
  };
  return (
    <div className="input-group pb-5 mx-auto styleSearchBar">
      <input
        type="search"
        className="form-control"
        placeholder="Buscar..."
        onChange={(event) => handleSearch(event)}
      />
      <button
        type="button"
        className="btn btn-dark"
        onClick={(event) => handleSubmit(event)}
      >
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}
