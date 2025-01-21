import React from "react";
import ServiceCard from "../../components/ServiceCard";

const serviceData = [
  {
    img:"/services/emergency.png",
    name:"Emergency 24*7",
    desc:"Our hospital offers 24/7 emergency services, providing immediate care and support for critical and urgent medical situations anytime."
  },
  {
    img:"/services/ultrasound.png",
    name:"Ultrasound",
    desc:"Ultrasound is a safe, non-invasive imaging technique used for diagnosing and monitoring conditions through high-frequency sound waves."
  },
  {
    img:"/services/genralWard.jpg",
    name:"General ward",
    desc:"Our General Ward provides comfortable care with dedicated staff, offering personalized attention and a supportive environment for recovery."
  },
  {
    img:"/services/oprationTheater.webp",
    name:"Opration theater",
    desc:"Our Operation Theater is equipped with advanced technology, ensuring safe, precise surgeries. Highly skilled surgeons and staff prioritize patient care and safety throughout the procedure."
  },
  {
    img:"/services/dialysis.png",
    name:"Dialysis",
    desc:"Our Dialysis unit offers advanced, compassionate care with state-of-the-art equipment, ensuring patients receive effective and comfortable treatment for kidney-related conditions."
  },
  {
    img:"/services/ambulance.jpg",
    name:"Ambulance",
    desc:"Our Ambulance service provides fast, reliable transport with trained medical professionals, ensuring safe and timely care for patients in need of urgent kidney treatment."
  },
  {
    img:"/services/ayushman.png",
    name:"Ayushman",
    desc:"Our hospital accepts Ayushman Bharat, providing affordable and accessible kidney care to eligible patients, ensuring high-quality treatment without financial burden."
  },
  {
    img:"/services/pharmacy.png",
    name:"Pharmacy",
    desc:"Our Pharmacy offers a wide range of medications, including those for kidney care, ensuring timely and accurate dispensing with expert guidance for optimal patient health management."
  },
  {
    img:"/services/x-ray.png",
    name:"X-Ray",
    desc:"Our X-Ray department is equipped with advanced imaging technology, providing accurate diagnostics to support effective treatment planning for kidney-related conditions and overall patient care."
  },
  {
    img:"/services/lab.png",
    name:"Lab",
    desc:"Our Lab offers comprehensive diagnostic services with advanced equipment, ensuring accurate test results for effective monitoring and management of kidney health and overall patient care."
  },
  {
    img:"/services/icu.png",
    name:"ICU",
    desc:"Our ICU provides intensive, round-the-clock care with specialized equipment and expert staff, ensuring the highest level of support for critically ill kidney patients."
  },
  {
    img:"/services/tpa.jpg",
    name:"TPA",
    desc:"Our TPA (Third Party Administrator) service streamlines insurance claims, ensuring quick and efficient processing for kidney treatment, making healthcare more accessible and hassle-free for our patients."
  },
]
function page() {
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full  ">
        <div className="w-full bg-pink-500 gap-10 py-5 lg:py-10 pl-5">
          <h1 className="font-bold text-2xl font-sans text-white my-3 ">
            Our Services
          </h1>
          <p className="text-lg font-sans text-white ">
            Delivering high quality medical care{" "}
          </p>
        </div>
      </div>
      <div className="w-[95%] lg:w-[80%] gap-5 mx-auto flex items-center justify-between flex-wrap py-10 " >
       {
        serviceData.map((s,i)=>(
          <ServiceCard key={i} img={s.img} name={s.name} desc={s.desc} />
        ))
       }
      </div>
    </div>
  );
}

export default page;
