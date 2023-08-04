"use client";

import React from "react";
import CommonButton from "./common-ui/CommonButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Rent Your Perfect Ride with SwiftWheels</h1>
        <p className="hero-subtitle">
          Explore. Experience. Enjoy. Your ultimate destination for hassle-free
          car rentals
        </p>
        <CommonButton
          title="Get a Car"
          containerStyles="hero-button"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero-image-container">
        <div className={"hero-image"}>
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero-image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
