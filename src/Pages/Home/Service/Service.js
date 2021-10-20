import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { key, name, image, chember, speciality, qualification } = props.doctor;
  return (
    <div>
      <Card style={{ height: "650px" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{qualification}</Card.Text>
          <Card.Text>{speciality}</Card.Text>
          <Card.Text>{chember}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ height: "90px" }}>
          <Link to={`/detail/${key}`}>
            <button className="animated-button">View {name}</button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Service;
