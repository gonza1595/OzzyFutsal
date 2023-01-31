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
      <MDBCol style={{ width: "100%" }}>
        <MDBCard>
          <MDBCardImage
            className="card-img-top "
            src={`http://localhost:1337${image[0]}`}
            style={{ width: "100%", height: "400px" }}
          />
          <MDBCardBody
            className="text-center bg-dark text-light"
            style={{ height: "200px" }}
          >
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>{description}</MDBCardText>
            <Link to={`/home/media/${id}`}>
              <button className="btn btn-primary mr-2 ">Fotos y Videos</button>
            </Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
