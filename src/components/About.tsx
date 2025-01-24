import React from "react";

const AboutUs = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* About Us Section */}
        <div className="w-[95%] lg:w-[60%] mx-auto text-center mb-12">
          <h1 className="text-4xl font-extrabold text-pink-500 mb-4">
            About Us
          </h1>
          <p className="text-md text-gray-600">
            At Dr. Lalji Kidney Care Centre, we specialize in providing
            high-quality, patient-centered care for those suffering from
            kidney-related ailments. Our compassionate team is committed to
            ensuring the best treatment for kidney disease, dialysis, and kidney
            transplants.
          </p>
        </div>

        {/* Our Core Values Section */}
        <div className="bg-gradient-to-r from-[#c34aff] to-[#6a5cff] py-12 px-4 sm:px-6 lg:px-8 mb-16 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-white text-center mb-8">
            Our Core Values
          </h2>
          <div className="space-y-8">
            <div className="bg-white bg-opacity-40 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">
                Patient-Centered Care
              </h3>
              <p className="text-white">
                We prioritize the needs of our patients above all else,
                providing personalized care and attention to ensure their
                comfort and well-being.
              </p>
            </div>
            <div className="bg-white bg-opacity-40 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">
                Excellence in Treatment
              </h3>
              <p className="text-white">
                Our medical team utilizes state-of-the-art technologies and the
                latest research to deliver the best possible care and outcomes.
              </p>
            </div>
            <div className="bg-white bg-opacity-40 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">
                Compassionate Care
              </h3>
              <p className="text-white">
                We believe in providing care with empathy, understanding, and
                respect, ensuring our patients feel supported throughout their
                treatment.
              </p>
            </div>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="w-[95%] lg:w-[60%] mx-auto  text-center mb-12">
          <h2 className="text-3xl font-semibold text-pink-500 mb-6">
            Get in Touch
          </h2>
          <p className="text-md text-gray-600">
            For more information about our services or to schedule a
            consultation, feel free to contact us. We are here to assist you in
            every step of your kidney care journey.
          </p>
          <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700">
            <a href="tel:+918264952313">Contact Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
