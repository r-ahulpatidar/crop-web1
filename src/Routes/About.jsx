import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AboutImg from "../images/crop-image2.jpg";
import Footer from "../components/Footer.jsx";
import AboutUs from "../components/AboutUs.jsx";

function About() {
  return (
    <div>
      <Navbar />
      <Hero csName="hero-about" cropImage={AboutImg} title="About" />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
