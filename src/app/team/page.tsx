"use client";
import Card from "@/components/Card";
import { Doctors, ServiceType } from "@/components/data";
import { motion } from "framer-motion";
// import { Metadata } from "next";
import React, { useState } from "react";
import TypewriterClass from "typewriter-effect";

enum Tab {
  TEAM = "team",
  DOCTORS = "video",
}

// export const metadata:Metadata = {
//   title: {
//     absolute:"drlaljikidneycenter doctors: check about our teams"
//   },
//   description:"Check what our patients saying about Dr. lal ji kidney care center. check review of our patients with Dr. lal ji kidney care center . Reach out today!"
// }

function page() {
  const [selectedTab, setSelectedTab] = useState<Tab>(Tab.DOCTORS);
  return (
    <div className="w-full  ">
      <motion.div
        initial={{ y: "20%", opacity: 1 }}
        whileInView={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-semibold text-black flex text-3xl lg:text-5xl leading-tight justify-center items-center "
      >
        <div className="flex text-3xl font-bold text-gray-800 mt-10  leading-tight">
          Meet our
          <div className="text-[#6a5cff] ml-2 inline">
            <TypewriterClass
              options={{
                strings: [" Team!", " Faculty!"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </motion.div>
      <div className="w-full my-8 flex items-center justify-center gap-5">
        <button
          onClick={() => setSelectedTab(Tab.TEAM)}
          className={`${
            Tab.TEAM == selectedTab
              ? "bg-pink-500 text-white"
              : "bg-white text-black"
          } px-4 py-2 rounded-lg  border-2 border-pink-600 hover:bg-pink-500 hover:text-white transition duration-300`}
        >
          Team
        </button>
        <button
          onClick={() => setSelectedTab(Tab.DOCTORS)}
          className={`${
            Tab.DOCTORS == selectedTab
              ? "bg-pink-500 text-white"
              : "bg-white text-black"
          }  px-4 py-2 rounded-lg  border-2 border-pink-600 hover:bg-pink-500 hover:text-white transition duration-300`}
        >
          Doctors
        </button>
      </div>
      {Tab.DOCTORS === selectedTab && (
        <div className="w-full my-10 flex items-center justify-center flex-wrap gap-5 ">
          {Doctors &&
            Doctors.map((c: ServiceType, i: number) => (
              <Card
                key={i}
                image={c.image}
                tittle={c.tittle}
                desc={c.desc}
                id={c.id}
              />
            ))}
        </div>
      )}
      {Tab.TEAM === selectedTab && (
        <div className="w-full my-10 flex items-center justify-center flex-wrap gap-5 ">
          <p>list of all team members will added here</p>
        </div>
      )}
    </div>
  );
}

export default page;
