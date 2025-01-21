"use client";

import React from "react";
import { motion } from "framer-motion";
import TypewriterClass from "typewriter-effect";
import { Testimonial } from "@/app/testimonials/page";


const Testimonials = (props:{
  testimonials:Testimonial[]
}) => {
  return (
    <div id="testimonials" className="bg-white py-16 p-6 ">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="flex text-3xl font-bold text-gray-800 mb-8 items-center justify-center leading-tight">
          What Our
          <div className="text-[#6a5cff] ml-2 inline">
            <TypewriterClass
              options={{
                strings: [" Patients Say!", " Clients Say!"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * testimonial.id }}
              className="bg-gradient-to-br to-transparent p-6 rounded-lg shadow-xl hover:scale-105 transform transition"
            >
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{testimonial.role}</p>
                <p className="text-gray-600 text-md">{testimonial.feedback}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
