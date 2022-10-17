import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AboutImg from "../images/crop-image4.jpg";
import Footer from "../components/Footer.jsx";
import ContactForm from "../components/ContactForm.jsx";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero csName="hero-about" cropImage={AboutImg} title="Contact" />
      <ContactForm />
      <Footer />
    </div>
  );
}
export default Contact;
