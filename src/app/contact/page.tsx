"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { TbHomePlus } from "react-icons/tb";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { Metadata } from "next";

// export const metadata:Metadata = {
//   title: {
//     absolute:"drlaljikidneycenter Contact: Reach Out to Us for Support and Inquiries"
//   },
//   description:"Have questions or feedback? Contact drlaljikidneycenter's dedicated support team for assistance and inquiries. We're here to help you make the most of your experience on our platform. Reach out today!"
// }

function page() {
  const [state, handleSubmit] = useForm("mkggdgrb");
  const navigation = useRouter();

  if (state.succeeded) {
    toast.success("Form Submited Successfuly!.");
    navigation.push("/");
  }

  return (
    <div className="w-full flex flex-col gap-10 lg:flex-row items-center lg:items-start justify-evenly min-h-[100vh] py-16 ">

      <div className=" w-[90%] lg:w-1/3">
        <div className="flex items-center justify-center p-6 bg-pink-400 rounded-lg shadow-md">
          <div className="bg-pink-200 bg-opacity-50 py-4 p-2 rounded-t-lg">
            <div className="w-full flex gap-10 items-start " >
             <TbHomePlus size={40}  />
             <div className="w-[80%] flex flex-col gap-3 " >
                <h3 className=" text-xl font-bold font-sans  " >ADDRESS </h3>
                <p className=" text-lg font-serif " >khudda jassu, near gurdwara sahib, Khudda Lahora, Chandigarh, Chandigarh 160014</p>
             </div>
            </div>

            <div className="w-full flex gap-10 items-start mt-10 " >
             <MdOutlineMarkEmailUnread size={40} />
             <div className="w-[80%] flex flex-col gap-3 ">
                <h3 className=" text-xl font-bold font-sans " >EMAIL </h3>
                <p className=" text-xl font-serif  " >drlaljikidney@gmail.com</p>
             </div>
            </div>

            <div className="w-full flex gap-10 items-start  mt-10 " >
             <FaPhoneAlt size={40} />
             <div className="w-[80%] flex flex-col gap-3 ">
                <h3 className=" text-xl font-bold font-sans " >PHONE</h3>
                <p className=" text-xl font-sans  " >(+91) - 8264952313</p>
             </div>
            </div>

            <div className="w-full flex gap-10 items-start mt-10 " >
             <IoMdTime size={40} />
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
        <form className="space-y-6" onSubmit={handleSubmit}>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              placeholder="Mr/Mrs. "
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
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
              type="tel"
              name="contact"
              pattern="^[7-9][0-9]{9}$" // Indian phone numbers: Starts with 7-9, followed by 9 digits
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              placeholder="Enter 10-digit number"
              maxLength={10}
            />
            <ValidationError
              prefix="Contact"
              field="contact"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              placeholder="Enter patient's address"
            />
            <ValidationError
              prefix="Address"
              field="address"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              placeholder="example@gmil.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              placeholder="Ask?"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-2 bg-pink-500 text-white font-semibold rounded-md  disabled:bg-gray-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
