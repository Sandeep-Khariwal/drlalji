import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Dr. Lal ji kidney care center</h2>
            <p className="text-gray-400 mt-4 text-md">
              Best dialysis center in chandigarh{" "}
            </p>
          </div>

          <div className="w-full flex flex-col items-start lg:items-center lg:justify-center px-auto md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Services we offer</h3>
          <p className="text-gray-400 hover:text-white text-md" >Emergency 24*7</p>
          <p className="text-gray-400 hover:text-white text-md" >Ultrasound </p>
          <p className="text-gray-400 hover:text-white text-md" >General ward</p>
          <p className="text-gray-400 hover:text-white text-md" >Opration theater</p>
          <p className="text-gray-400 hover:text-white text-md" >Dialysis</p>
          <p className="text-gray-400 hover:text-white text-md" >Ambulance</p>
          <p className="text-gray-400 hover:text-white text-md" >Ayushman</p>
          <p className="text-gray-400 hover:text-white text-md" >Pharmacy</p>
          <p className="text-gray-400 hover:text-white text-md" >X-Ray </p>
          <p className="text-gray-400 hover:text-white text-md" >Lab</p>
          <p className="text-gray-400 hover:text-white text-md" >ICU</p>
          <p className="text-gray-400 hover:text-white text-md" >TPA</p>
          </div>

          {/* Quick Links */}
          <div className="w-full flex flex-col items-start lg:items-center justify-start px-auto md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-md"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-white text-md"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white text-md"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white text-md"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <address className="w-full md:w-1/4">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-md ">
              Dr.Lal ji kidney care center
            </p>
            <p className="text-gray-400 text-md">
              351, khudda jassu, near gurdwara sahib, Khudda Lahora, Chandigarh,
              Khudda Lahora, Chandigarh 160014
            </p>
            <p className="text-gray-400 text-md">Email: drlalji@gmail.com</p>
            <p className="text-gray-400 text-md">Phone: (+91) - 8264952313</p>
          </address>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Dr.Lal ji kidney care center. All
          rights reserved.
        </div>
      </div>



    </footer>
  );
};

export default Footer;
