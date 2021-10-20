import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useDoctors from "../../../hooks/useDoctors";
import Service from "../Service/Service";

const Services = () => {
  const { doctors } = useDoctors();
  return (
    <div>
      <Container>
        <Row xs={1} md={3} lg={4}>
          {doctors.map((doctor) => (
            <Col className="my-3">
              <Service key={doctor.key} doctor={doctor}></Service>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
