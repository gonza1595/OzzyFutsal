import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="input-group pb-5 mx-auto styleSearchBar">
      <input type="search" className="form-control" placeholder="Buscar..." />
      <button type="button" className="btn btn-dark">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}
