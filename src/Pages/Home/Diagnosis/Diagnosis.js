import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Diagnosis.css";

const Diagnosis = () => {
  return (
    <div>
      <Container className="diagnosis-container">
        <Row>
          <Col xs={12} md={6}>
            <div className="text-start">
              <h2 className="mt-5">
                The unknown is just a question, <br />
                we find the answers.
              </h2>
              <h5 style={{ color: "gray" }}>
                Getting an accurate diagnosis can be one of the most impactful
                experiences that you can have — especially if you've been in
                search of that answer for a while. We can help you get there.
              </h5>
              <button className="diagnosis-btn mb-2">Find out more</button>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <img
              className="w-100"
              src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2020/09/03/19/53/ykwtg-do-090320.png?la=en"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Diagnosis;
