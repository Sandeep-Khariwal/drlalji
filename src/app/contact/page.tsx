"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { TbHomePlus } from "react-icons/tb";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import axios from "axios";

interface FormData {
  email: string,
  name: string,
  contact: string,
  address: string,
  message: string
}

function Page() {
  const navigation = useRouter();
  const [data,setData] = useState<FormData>({
    email: "",
    name: "",
    contact: "",
    address: "",
    message: ""
  })
  const [button,setButton] = useState<string>("Submit")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async()=> {
    if(data.contact.length != 10){
      toast.error("Only 10 digit contact number!!");
      return
    }
    setButton("Loading...")
    const response = await axios.post("https://www.drlaljikidneycarehospital.in/api/email",data).then((response)=>response.data)

    if(response.status){
      setButton("Submit")
      toast.success("Form Submited Successfuly!.");
      navigation.push("/");
    }
  }


  return (
    <div className="w-full text-white font-Poppins flex flex-col gap-10 lg:flex-row items-center lg:items-start justify-evenly min-h-[100vh] py-16 ">

      <div className=" w-[90%] lg:w-1/3">
        <div className="flex items-center justify-center p-6 bg-gradient-to-r from-[#c34aff] to-[#6a5cff] rounded-lg shadow-md">
          <div className="bg-pink-200 bg-opacity-50 py-4 p-2 rounded-t-lg">
            <div className="w-full flex gap-10 items-start " >
             <TbHomePlus size={40} color="white"  />
             <div className="w-[80%] flex flex-col gap-3 " >
                <h3 className=" text-xl font-bold font-sans  " >ADDRESS </h3>
                <p className=" text-lg font-serif " >khudda jassu, near gurdwara sahib, Khudda Lahora, Chandigarh, Chandigarh 160014</p>
             </div>
            </div>

            <div className="w-full flex gap-10 items-start mt-10 " >
             <MdOutlineMarkEmailUnread size={40} color="white"  />
             <div className="w-[80%] flex flex-col gap-3 ">
                <h3 className=" text-xl font-bold font-sans " >EMAIL </h3>
                <p className=" text-xl font-serif  " >drlaljikidney@gmail.com</p>
             </div>
            </div>

            <div className="w-full flex gap-10 items-start  mt-10 " >
             <FaPhoneAlt size={40} color="white"  />
             <div className="w-[80%] flex flex-col gap-3 ">
                <h3 className=" text-xl font-bold font-sans " >PHONE</h3>
                <p className=" text-xl font-sans  " >(+91) - 8264952313</p>
             </div>
            </div>

            <div className="w-full flex gap-10 items-start mt-10 " >
             <IoMdTime size={40} color="white" />
             <div className="w-[80%] flex flex-col gap-3 ">
                <h3 className=" text-xl font-bold font-sans " >
                TIMING : </h3>
                <p className=" text-xl font-serif  " >Monday - Sunday</p>
             </div>
            </div>

          </div>
        </div>
      </div>

      <div className="w-[90%] lg:w-1/3 p-6 sm:p-8 bg-white rounded-lg shadow-lg">
        <Toaster />
        <h2 className="text-3xl sm:text-4xl font-semibold font-sans text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <form className="space-y-6" >
          {/* Patient Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg sm:text-xl font-medium text-gray-700 mb-2"
            >
              Patient Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              value={data.name}
              onChange={handleChange}
              placeholder="Mr/Mrs. "
            />
          </div>

          {/* Contact Number Field */}
          <div>
            <label
              htmlFor="contact"
              className="block text-lg sm:text-xl font-medium text-gray-700 mb-2"
            >
              Contact Number (Indian)
            </label>
            <input
              id="contact"
              type="number"
              name="contact"
              pattern="^[7-9][0-9]{9}$" 
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              value={data.contact}
              onChange={handleChange}
              placeholder="Enter 10-digit number"
              maxLength={10}
              minLength={10}
            />
          </div>

          {/* Address Field */}
          <div>
            <label
              htmlFor="address"
              className="block text-lg sm:text-xl font-medium text-gray-700 mb-2"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              value={data.address}
              onChange={handleChange}
              placeholder="Enter patient's address"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg sm:text-xl font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              value={data.email}
              onChange={handleChange}
              placeholder="example@gmil.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-lg sm:text-xl font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              value={data.message}
              onChange={handleChange}
              placeholder="Ask?"
            />
          </div>

          {/* Submit Button */}
          <div>
          </div>
        </form>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full py-2 bg-pink-500 text-white font-semibold rounded-md  disabled:bg-gray-400"
            >
              {button}
            </button>
      </div>
    </div>
  );
}

export default Page;
