import React from "react";
import Banner from "../Banner/Banner";
import Diagnosis from "../Diagnosis/Diagnosis";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Subscribe></Subscribe>
      <Diagnosis></Diagnosis>
    </div>
  );
};

export default Home;
