import Image from "next/image";
import React from "react";

const ServiceCard = (props: { img: string; name: string; desc: string }) => {
  return (
    <div className="w-full lg:w-[32%] flex flex-col items-center justify-center lg:flex-row gap-1 ">
      <div className="w-full lg:w-[30%] items-center justify-center ">
        <Image src={props.img} alt="No" width={130} height={50} style={{margin:"auto"}} />
      </div>
      <div className="w-[95%] lg:w-[70%] p-2 ">
        <p className=" text-lg font-bold text-pink-500 my-3 ">{props.name}</p>
        <p className="text-md font-semibold text-gray-500 ">{props.desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
