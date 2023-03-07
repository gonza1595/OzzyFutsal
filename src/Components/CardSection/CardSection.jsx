import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changePage } from "../../Redux/Actions";
import "./CardSections.css";

export default function CardSection({ title, description, image, id, page }) {
  return (
    <div>
      <Link
        className="text-decoration-none"
        to={`/home/media/${id}?page=${page}`}
      >
        <div className="card border border-0 mx-auto bg-white cardWidth ">
          <img
            src={`http://localhost:1337${image[0]}`}
            className="card-img-top"
            alt="Images"
            style={{ width: "100%", height: "240px" }}
          />
          <div
            className="card-body text-center text-dark"
            style={{ height: "160px" }}
          >
            <h5 className="card-title fw-bold pt-3">{title}</h5>
            <p className="card-text fw-normal pt-2">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
