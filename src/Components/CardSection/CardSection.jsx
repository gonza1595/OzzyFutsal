import React from "react";
import { Link } from "react-router-dom";
import "./CardSections.css";

export default function CardSection({
  title,
  description,
  image,
  id,
  page,
  category,
}) {
  return (
    <div className="hover-overlay">
      <Link
        className="text-decoration-none"
        to={`/home/media/${id}?page=${page}`}
      >
        <div className="card border border border-dark border-0 mx-auto bg-white cardWidth bg-image rounded-0">
          <img
            src={`http://localhost:1337${image[0]}`}
            alt="Images"
            style={{ width: "100%", height: "240px" }}
          />
          <div
            className="card-body text-center text-dark position-relative"
            style={{ height: "160px" }}
          >
            <h5 className="card-title fw-bold pt-3">{title}</h5>
            <p className="card-text fw-normal pt-2">{description}</p>
            <div className="card-img-overlay mask">
              <p className="card-title categoryColor position-absolute bottom-0 start-50 translate-middle-x">
                {category}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
