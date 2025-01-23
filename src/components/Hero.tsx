"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
  const images = ["/kidney.avif", "/kidney1.jpg", "/kidney.webp"];
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div>
      {/* Main content */}
      <div
        className="relative text-center py-36 bg-white"
        style={{
          height: "500px", 
          overflow: "hidden",
        }}
      >
        {/* Background Image Carousel */}
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
            transition: "opacity 1s ease-in-out",
          }}
        ></div>
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 1,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        {/* Text and Buttons */}
        <h1 className="relative text-white text-4xl font-bold  drop-shadow-lg z-10">
          BEST DIALYSIS IN CHANDIGARH
        </h1>
        <p className="relative text-white mt-4 max-w-2xl mx-auto text-lg drop-shadow-lg z-10">
          With experience of more than 10 years in Healthcare, Dr. Lal ji is
          undoubtedly the best nephrologist in Chandigarh.
        </p>

        <div className="relative flex justify-center space-x-4 mt-8 z-10  ">
          <button className="bg-gradient-to-br from-purple-500 via-pink-400 opacity-1 w-60 text-white px-6 py-3 rounded-full transition hover:bg-purple-600 hover:text-white">
            <a href="tel:+918264952313">CALL US NOW!</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
