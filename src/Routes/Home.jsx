import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import HomeImg from "../images/crop-image.jpg";
import "../components/HeroStyles.css";
import DetailsCrop from "../components/DetailsCrop.jsx";
import CropCard from "../components/CropCard.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        csName="hero"
        cropImage={HomeImg}
        title="Different Types Of Crops"
        text="Vegetables are good for health"
        url="/"
        urlClass="show"
        urlText="Crop Order"
      />
      <DetailsCrop />
      <CropCard />
      <Footer />
    </div>
  );
}

export default Home;
