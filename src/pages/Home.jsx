import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <HeroSection />
        <Services />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default Home;
