import React from "react";
import { Carousel } from "react-bootstrap";
import photo1 from "../../../images/photo1.jpg";
import photo2 from "../../../images/photo2.jpg";
import photo3 from "../../../images/photo3.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={photo3} alt="First slide" />
          <Carousel.Caption>
            <h3 className="m-0 p-0" style={{ color: "black", fontSize: "1em" }}>
              Get appointment now
            </h3>
            <p
              className="m-0 p-0"
              style={{ color: "black", fontSize: "1em", fontWeight: "300" }}
            >
              Your doctor is now just one click away
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={photo2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="m-0 p-0" style={{ color: "black", fontSize: "1em" }}>
              Get your medication
            </h3>
            <p
              className="m-0 p-0"
              style={{ color: "black", fontSize: "1em", fontWeight: "300" }}
            >
              One stop service for doctors and medications
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={photo1} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="m-0 p-0" style={{ color: "black", fontSize: "1em" }}>
              Get appointment for tests now
            </h3>
            <p
              className="m-0 p-0"
              style={{ color: "black", fontSize: "1em", fontWeight: "300" }}
            >
              You can get appointment for test and test result here
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
