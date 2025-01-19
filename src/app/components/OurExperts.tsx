"use client";
import { motion } from "framer-motion";
import { Service, ServiceType } from "./data";
import Card from "./Card";

const OurExperts = () => {
  return (
    <div id="experts" className=" w-[90%] lg:w-[80%] mx-auto mt-4 lg:mt-20 ">
      <motion.div
        initial={{ y: "20%", opacity: 1 }}
        whileInView={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-semibold text-black flex text-3xl lg:text-5xl leading-tight justify-center items-center "
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Experts</h2>
      </motion.div>
      <div className="w-full flex justify-between items-center flex-wrap lg:mt-10 ">
        {Service &&
          Service.map((c: ServiceType, i: number) => (
            <Card key={i} image={c.image} tittle={c.tittle} desc={c.desc} />
          ))}
      </div>
    </div>
  );
};

export default OurExperts;
