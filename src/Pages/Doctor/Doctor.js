import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "./Doctor.css";

const Doctor = () => {
  const { doctorId } = useParams();
  const id = parseInt(doctorId) - 1;
  const [doctor, setDoctor] = useState({});
  useEffect(() => {
    fetch(`https://api.npoint.io/c112ef90b6390fd9c656/${id}`)
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, []);

  const { name, image, phone, chember, speciality, qualification } = doctor;

  return (
    <div>
      <Container className="d-flex doctor-container">
        <Row>
          <Col xs={12} md={6}>
            <img src={image} alt="" />
          </Col>
          <Col xs={12} md={6} className="text-start">
            <h1>Name: {name}</h1>
            <h3>Qualifications: {qualification}</h3>
            <h4>Speciality: {speciality}</h4>
            <h4>Chember: {chember}</h4>
            <h4>Call: {phone}</h4>
            <button
              onClick={() => alert(`You have got an appointment with ${name}`)}
              className="animated-button"
            >
              Get Appointment
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Doctor;
