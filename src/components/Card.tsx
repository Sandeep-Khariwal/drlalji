"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter} from "next/navigation";

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

const Card = (data: {
  id:number;
  image: string;
  tittle: string;
  desc: string;
  duration?: string;
  fees?: string;
}) => {
  const navigation = useRouter()
  
  return (
    <motion.div
      initial={{ y: "10%", opacity: 1 }}
      whileInView={{ y: "0%", opacity: 1 }}
      transition={{ duration: 1 }}
      className=" w-full lg:w-1/4 m-4 p-2 shadow-lg bg-[#fff] rounded-2xl "
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
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#6a5cff", stopOpacity: 1, margin: "5px" }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#c34aff", stopOpacity: 1, margin: "5px" }}
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
              src={data.image}
              alt="Description of image"
              width={200}
              height={200}
              className="rounded-full "
            />
          </div>
        </foreignObject>
      </motion.svg>

      <p className="font-semibold text-[#36454F] m-4 text-xl leading-tight text-center ">
        {data.tittle}
      </p>
      <p className="mt-3 text-md m-2 font-poppins text-gray-500 text-center ">
        {data.desc.substring(0,250) + "..."} <span style={{fontWeight:700, cursor:"pointer", color:"#1E90FF"}} onClick={()=>navigation.push(`/profile/${data.id}`)} >Read more</span>
      </p>
    </motion.div>
  );
};

export default Card;
