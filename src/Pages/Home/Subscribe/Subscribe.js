import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="wrapper">
      <Container className="subscribe-container">
        <Row>
          <Col xs={12} md={6}>
            <img
              className="shadow-lg bg-white rounded w-100"
              src="https://images.medicinenet.com/images/mobile/hp_promo/nl-promo-be-healthy-2.jpg"
              alt=""
            />
          </Col>
          <Col xs={12} md={6}>
            <div>
              <h3 className="red-text text-start">
                BE HEALTHY.
                <br />
                STAY INFORMED.
              </h3>
              <p>
                Get the MedicineNet Daily newsletter for health tips, wellness
                updates and more.
              </p>
              <div className="d-flex">
                <input
                  className="rounded w-75"
                  type="text"
                  placeholder="Enter your email"
                />
                <button className="button-subscribe mx-2">Subscribe Now</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="container subscribe-container">
        <p class="terms">
          By clicking "Subscribe Now", I agree to the MedicineNet{" "}
          <a
            target="_blank"
            href="https://www.medicinenet.com/script/main/art.asp?articlekey=12596"
          >
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="https://www.medicinenet.com/script/main/art.asp?articlekey=12507"
          >
            Privacy Policy
          </a>
          . I also agree to receive emails from MedicineNet and I understand
          that I may opt out of MedicineNet subscriptions at any time.
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
