import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blog = (props) => {
  const { title, image, description, date } = props.blog;
  return (
    <div>
      <Container className="shadow-sm p-3 mb-5 bg-white rounded">
        <Row>
          <Col xs={12} md={3}>
            <small>published on: {date}</small>
          </Col>
          <Col xs={12} md={6}>
            <div className="text-start">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <img className="d-block w-100" src={image} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
