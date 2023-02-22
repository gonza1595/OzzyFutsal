import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function CardSection({ title, description, image, id }) {
  return (
    <MDBRow>
      <MDBCol>
        <MDBCard style={{ width: "370px" }}>
          <MDBCardImage
            className="card-img-top "
            src={`http://localhost:1337${image[0]}`}
            style={{ width: "100%", height: "240px" }}
          />
          <MDBCardBody
            className="text-center  text-dark"
            style={{ height: "170px" }}
          >
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>{description}</MDBCardText>
            <Link className="stretched-link" to={`/home/media/${id}`}>
              <button className="btn btn-secondary mr-2 stretched-link">
                Fotos y Videos
              </button>
            </Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
