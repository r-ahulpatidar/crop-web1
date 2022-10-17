import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AboutImg from "../images/crop-image3.jpg";
import Footer from "../components/Footer.jsx";
import CropCard from "../components/CropCard.jsx";

function Service() {
  return (
    <div>
      <Navbar />
      <Hero csName="hero-about" cropImage={AboutImg} title="Service" />
      <CropCard />
      <Footer />
    </div>
  );
}
export default Service;
