"use client";
import { useState } from "react";
import { TbMenu } from "react-icons/tb"; // Import the hamburger menu icon
import { TbX } from "react-icons/tb"; // Import the close icon for mobile menu
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu visibility on mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center sticky top-0 z-10">
          <span className="text-pink-500 text-2xl font-bold">
            Dr. Lal ji <span className="text-black">Kidney center</span>
          </span>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-pink-500">
            {menuOpen ? (
              <TbX size={30} className="text-black" />
            ) : (
              <TbMenu size={30} />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 text-gray-600 font-medium z-10 px-4 py-2">
          <a href="#" onClick={toggleMenu} className="hover:text-pink-500">
            Home
          </a>
          <a href="#" onClick={toggleMenu} className="hover:text-pink-500">
            About us
          </a>
          <a href="#" onClick={toggleMenu} className="hover:text-pink-500">
            Services
          </a>
          <a
            href="#experts"
            onClick={toggleMenu}
            className="hover:text-pink-500  transition duration-300 ease-in-out"
          >
            Our Team
          </a>
          <a
            href="#testimonials"
            onClick={toggleMenu}
            className="hover:text-pink-500  transition duration-300 ease-in-out"
          >
            Our Testimonials
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="hover:text-pink-500  transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: menuOpen ? 0 : -100,
            height: menuOpen ? "auto" : 0, // Adjust height when the menu opens
          }}
          transition={{ duration: 0.5 }}
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:hidden absolute top-16 left-0 w-full bg-white shadow-md z-20 px-4 py-2`}
        >
          <nav className="flex flex-col items-center justify-center space-y-6">
            {" "}
            {/* Use flex column layout with spacing */}
            <a
              href="#why"
              onClick={toggleMenu}
              className="text-gray-600  transition duration-300 ease-in-out hover:text-pink-500 text-lg font-medium py-2"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={toggleMenu}
              className="text-gray-600  transition duration-300 ease-in-out hover:text-pink-500 text-lg font-medium py-2"
            >
              About us
            </a>
            <a
              href="#services"
              onClick={toggleMenu}
              className="text-gray-600  transition duration-300 ease-in-out hover:text-pink-500 text-lg font-medium py-2"
            >
              Services
            </a>
            <a
              href="#experts"
              onClick={toggleMenu}
              className="text-gray-600  transition duration-300 ease-in-out hover:text-pink-500 text-lg font-medium py-2"
            >
              Our Team
            </a>
            <a
              href="#testimonials"
              onClick={toggleMenu}
              className="text-gray-600  transition duration-300 ease-in-out hover:text-pink-500 text-lg font-medium py-2"
            >
              Our Testimonials
            </a>
            <a
              onClick={toggleMenu}
              href="#contact"
              className="text-gray-600  transition duration-300 ease-in-out hover:text-pink-500 text-lg font-medium py-2"
            >
              Contact
            </a>
          </nav>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
