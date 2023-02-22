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
        <Link to={`/home/media/${id}`}>
          <MDBCard style={{ width: "300px" }}>
            <MDBCardImage
              className="card-img-top "
              src={`http://localhost:1337${image[0]}`}
              style={{ width: "100%", height: "240px" }}
            />
            <MDBCardBody
              className="text-center text-dark"
              style={{ height: "170px" }}
            >
              <MDBCardTitle>{title}</MDBCardTitle>
              <MDBCardText>{description}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Link>
      </MDBCol>
    </MDBRow>
  );
}
