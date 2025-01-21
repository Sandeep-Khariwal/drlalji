"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Doctors, ServiceType } from "@/components/data";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";
import { FaAward } from "react-icons/fa";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function Page() {
  const params = useParams();
  const [doctor, setDoctor] = useState<ServiceType>();

  useEffect(() => {
    const doctorProfile:ServiceType[] = Doctors.filter((d:ServiceType) => d.id === Number(params.id));
    if (doctorProfile.length > 0) {
      setDoctor(doctorProfile[0]);
    }
  }, [params.id]);
  return (
    <>
      <div className="w-full flex flex-col gap-10 items-center justify-between py-10 ">
        <div className=" p-6 ">
          <div className="w-full  ">
            <motion.div
              initial={{ y: "0%", opacity: 1 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1 }}
              className=" w-full p-2 shadow-lg bg-[#fff] rounded-2xl "
            >
              <motion.svg
                width="200"
                viewBox="-15 -15 230 230"
                initial="hidden"
                animate="visible"
                spacing={10}
                className={"m-auto  "}
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      style={{
                        stopColor: "#6a5cff",
                        stopOpacity: 1,
                        margin: "5px",
                      }}
                    />
                    <stop
                      offset="100%"
                      style={{
                        stopColor: "#c34aff",
                        stopOpacity: 1,
                        margin: "5px",
                      }}
                    />
                  </linearGradient>
                </defs>
                <motion.circle
                  cx="100"
                  cy="100"
                  r="110"
                  stroke="url(#gradient)"
                  strokeWidth={10}
                  variants={draw}
                  custom={1}
                />
                <foreignObject x="0" y="0" width="200" height="200">
                  <div className="flex justify-center items-center">
                    <Image
                      src={doctor?.image!!}
                      alt="Description of image"
                      width={200}
                      height={200}
                      className="rounded-full "
                    />
                  </div>
                </foreignObject>
              </motion.svg>
          <div>
            <p className="font-semibold font-sans text-[#36454F] m-4 text-xl leading-tight text-center ">
              {doctor?.tittle}
            </p>
          </div>
            </motion.div>
          </div>
        </div>

        <div className="w-[95%] lg:w-[80%] shadow-lg p-3 ">
          <div className="w-full flex items-center gap-5 ">
            <FaCircleUser size={33} color="#36454F" />
            <h2 className=" font-bold font-sans text-[#36454F] ">About</h2>
          </div>
          <hr className="w-full my-5 " />
          <div className="w-full p-2 lg:p-10 font-semibold text-gray-500">{doctor?.desc}</div>
        </div>

        <div className="w-[95%] lg:w-[80%] shadow-lg p-3 ">
          <div className="w-full flex items-center gap-5 ">
            <IoMdSchool size={33} color="#36454F" />
            <h2 className=" font-bold font-sans text-[#36454F] ">Education</h2>
          </div>
          <hr className="w-full my-5 " />
          <div className="w-full p-2 lg:p-10 font-semibold text-gray-500">{doctor?.education}</div>
        </div>

        <div className="w-[95%] lg:w-[80%] shadow-lg p-3 ">
          <div className="w-full flex items-center gap-5 ">
            <FaAward size={33} color="#36454F" />
            <h2 className=" font-bold font-sans text-[#36454F] ">Awards & Achievement</h2>
          </div>
          <hr className="w-full my-5 " />
          <div className="w-full p-2 lg:p-10 font-semibold text-gray-500 ">{doctor?.achievement}</div>
        </div>
      </div>
    </>
  );
}
