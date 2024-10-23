import React from "react";
import justiceImage from "../assets/justice-image.jpg";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-screen text-white items-center justify-center"
      style={{
        backgroundImage: `url(${justiceImage})`,
      }}
    >
      <div className="text-center p-8 bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
          Güvenilir Hukuk Danışmanınız
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-6">
          Govenc Hukuk tüm ihtiyaçlarınıza yönelik kapsamlı hukuki çözümler
          sunar.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-color"
        >
          Bizimle İletişime Geçin
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
