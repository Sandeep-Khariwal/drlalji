"use client";
import { useState } from "react";
import { TbMenu } from "react-icons/tb";
import { TbX } from "react-icons/tb";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Banner */}
      <div className="bg-pink-500 text-white text-center py-2 text-sm hidden lg:block ">
        24 x 7 Advanced Healthcare Made Personal.
        <span className="float-right pr-4">
          <i className="fas fa-map-marker-alt"></i> 351, Khudda Jassu, near
          Gurdwara Sahib, Khudda Lahora, Chandigarh, 160014
        </span>
      </div>

      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-2 py-3">
          <div className="flex gap-2 lg:gap-5  items-center sticky top-0 z-10">
            <Image src={"/logo.jpg"} alt="logo" width={85} height={50} />
            <span className="text-pink-500 text-xl lg:text-2xl font-bold ">
              Dr. Lal ji <span className="text-black">Kidney hospital</span>
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
            <Link href="/" onClick={toggleMenu} className="hover:text-pink-500">
              Home
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className="hover:text-pink-500"
            >
              About us
            </Link>
            <Link
              href="/team"
              onClick={toggleMenu}
              className="hover:text-pink-500  transition duration-300 ease-in-out"
            >
              Our Team
            </Link>
            <Link
              href="/testimonials"
              onClick={toggleMenu}
              className="hover:text-pink-500  transition duration-300 ease-in-out"
            >
              Our Testimonials
            </Link>
            <Link
              href="/gallery"
              onClick={toggleMenu}
              className="text-gray-600  transition duration-300 ease-in-out hover:text-pink-500 "
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="text-gray-600  transition duration-300 ease-in-out hover:text-pink-500 "
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: menuOpen ? 0 : -100,
              height: menuOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.5 }}
            className={`${
              menuOpen ? "block" : "hidden"
            } lg:hidden absolute top-28 left-0 w-full bg-white shadow-md z-20 px-4 py-2`}
          >
            <nav className="flex flex-col items-center justify-center space-y-6">
              {" "}
              {/* Use flex column layout with spacing */}
              <Link
                href="/"
                onClick={toggleMenu}
                className="text-gray-600  transition duration-300 ease-in-out hover:text-pink-500 text-lg font-medium py-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={toggleMenu}
                className="text-gray-600  transition duration-300 ease-in-out hover:text-pink-500 text-lg font-medium py-2"
              >
                About us
              </Link>
              <Link
                href="/team"
                onClick={toggleMenu}
                className="text-gray-600  transition duration-300 ease-in-out hover:text-pink-500 text-lg font-medium py-2"
              >
                Our Team
              </Link>
              <Link
                href="/testimonials"
                onClick={toggleMenu}
                className="text-gray-600  transition duration-300 ease-in-out hover:text-pink-500 text-lg font-medium py-2"
              >
                Our Testimonials
              </Link>
              <Link
                href="/gallery"
                onClick={toggleMenu}
                className="text-gray-600  transition duration-300 ease-in-out hover:text-pink-500 text-lg font-medium py-2"
              >
                Gallery
              </Link>
              <Link
                onClick={toggleMenu}
                href="/contact"
                className="text-gray-600  transition duration-300 ease-in-out hover:text-pink-500 text-lg font-medium py-2"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
