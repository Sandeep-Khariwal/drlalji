"use client";
import { motion } from "framer-motion";
import { Doctors, ServiceType } from "./data";
import Card from "./Card";
import TypewriterClass  from "typewriter-effect";

const OurExperts = () => {
  return (
    <div id="experts" className=" w-[90%] lg:w-[80%] mx-auto mt-4 lg:mt-20 ">
      <motion.div
        initial={{ y: "20%", opacity: 1 }}
        whileInView={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-semibold text-black flex text-3xl lg:text-5xl leading-tight justify-center items-center "
      >
        <div className="flex text-3xl font-bold text-gray-800 mb-8  leading-tight">Our 
        <div className="text-[#6a5cff] ml-2 inline">
          <TypewriterClass
            options={{
              strings: [" Experts!"," Doctors!"],
              autoStart: true,
              loop: true,
            }}
            
          />
        </div>
        </div>
      </motion.div>
      <div className="w-full flex justify-evenly items-center flex-wrap lg:mt-10 ">
        {Doctors &&
          Doctors.map((c: ServiceType, i: number) => (
            <Card key={i} image={c.image} tittle={c.tittle} desc={c.desc} id={c.id} />
          ))}
      </div>
    </div>
  );
};

export default OurExperts;
