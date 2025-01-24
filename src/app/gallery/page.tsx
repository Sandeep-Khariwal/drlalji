"use client";

import { Gallery, Videos } from "@/components/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TypewriterClass from "typewriter-effect";

enum Tab {
  PHOTO = "photo",
  VIDEO = "video",
}

const Page = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(Tab.VIDEO);
  const [gallery, setGallery] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);

  useEffect(() => {
    if (Gallery.length) {
      setGallery(Gallery);
    }
    if (Videos.length) {
      setVideos(Videos);
    }
  }, []);

  return (
    <div className="w-full">
      <motion.div
        initial={{ y: "20%", opacity: 1 }}
        whileInView={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-semibold text-black flex text-3xl lg:text-5xl leading-tight justify-center items-center "
      >
        <div className="flex text-3xl font-bold text-gray-800 mt-10  leading-tight">
          One eye on
          <div className="text-[#6a5cff] ml-2 inline">
            <TypewriterClass
              options={{
                strings: [
                  "our hospital!",
                  "our OPD!",
                  "our machines!",
                  "our ward!",
                  "our videos!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </motion.div>
      <div className="w-full my-16 flex items-center justify-center gap-5">
        <button
          onClick={() => setSelectedTab(Tab.PHOTO)}
          className={`${
            Tab.PHOTO == selectedTab
              ? "bg-pink-500 text-white"
              : "bg-white text-black"
          } px-4 py-2 rounded-lg  border-2 border-pink-600 hover:bg-pink-500 hover:text-white transition duration-300`}
        >
          Photos
        </button>
        <button
          onClick={() => setSelectedTab(Tab.VIDEO)}
          className={`${
            Tab.VIDEO == selectedTab
              ? "bg-pink-500 text-white"
              : "bg-white text-black"
          }  px-4 py-2 rounded-lg  border-2 border-pink-600 hover:bg-pink-500 hover:text-white transition duration-300`}
        >
          Videos
        </button>
      </div>
      {Tab.PHOTO === selectedTab && (
        <div className="w-full my-10 flex items-center justify-center flex-wrap gap-5 ">
          {gallery &&
            gallery.map((g: string, i: number) => (
              <div key={i}  >
                <Image
                  src={g}
                  alt="Image not found"
                  className="w-full lg:w-auto"
                  width={300}
                  height={300}
                />
              </div>
            ))}
        </div>
      )}
      {Tab.VIDEO === selectedTab && (
        <div className="w-full my-10 flex items-center justify-center flex-wrap gap-5 ">
          {videos &&
            videos.map((v: string, i: number) => (
              <div key={i}>
                <iframe
                  className="w-[380] xs:w-[400] sm:w-[420] h-[330] lg:w-auto"
                  src={v}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Page;
