"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sujeet kumar",
    role: "Patient",
    feedback:
      "It has been 3months I got my dialysis done here, I am personally like my dialysis here, good staff, and experience technician and the owner Abhishek sir too polite with patients and caring too.",
  },
  {
    id: 2,
    name: "Vinod kumar",
    role: "Patient",
    feedback:
      "Lal ji Dileysis center is very good sarvice Cleanliness is very good.Tofik sir and nusrat madam are very good team leaders Rajkishor and kumkum maam they do thair work very well or take good care of the patients Everything is Excellent",
  },
  {
    id: 3,
    name: "Anjali",
    role: "Patient",
    feedback:
      "Thank you for the excellent care and treatment offered by Doctors  and his team at Dr. Lal Ji Kidney Care Centre (LLP). The nursing staff is well-trained, caring, and supportive.",
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="bg-white py-16 p-6 ">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          What Our Patients Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
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
