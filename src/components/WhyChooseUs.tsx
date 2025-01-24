"use client"

import Image from "next/image";
import React from "react";
import TypewriterClass from "typewriter-effect";

const WhyChooseUs = () => {
  return (
    <>
      <div className="w-full flex text-3xl items-center justify-center py-10 font-bold text-gray-800  leading-tight">
        Why
        <div className="text-[#6a5cff] ml-2 inline">
          <TypewriterClass
            options={{
              strings: [" Choose us?", " only we?"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    <div className="w-full flex flex-col items-center justify-center py-10 bg-gradient-to-r from-[#6a5cff] to-[#c34aff] bg-opacity-70 shadow-lg">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-evenly space-y-8 lg:space-y-0">
        {/* Left Column: Image */}
        <div className="w-full lg:w-1/3 flex justify-center shadow-xl rounded-lg overflow-hidden">
          <Image
            src={"/dr-removebg.png"}
            alt="doctor"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column: Text */}
        <div className="w-full lg:w-1/3 py-5 px-6 bg-white bg-opacity-80 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#6a5cff] mb-4 lowercase">
            Our mission
          </h2>
          <p className="text-lg text-gray-800 mb-4 ">
            to provide patient-centered healthcare with excellence in quality,
            service, and access.
          </p>

          <h2 className="text-2xl font-bold text-[#6a5cff] mb-4 ">
            Our vision
          </h2>
          <p className="text-lg text-gray-800 mb-4 ">
            a community in which all people achieve their full potential for
            health and well-being across the lifespan. we work to be trusted by
            patients, a valued partner in the community, and creators of
            positive change.
          </p>

          <h2 className="text-2xl font-bold text-[#6a5cff] mb-4 ">
            Our values
          </h2>
          <p className="text-lg text-gray-800 lowercase">
            the patient comes first. we are dedicated to patient care.
          </p>
        </div>
      </div>
    </div>
    </>);
};

export default WhyChooseUs;
