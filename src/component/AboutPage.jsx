import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import heartImage from "../assets/about-img.png"; // Heart-shaped image
import ContactPage from "./ContactPage";

const AboutPage = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/about" && (
        <div className="relative w-full h-[250px] overflow-hidden bg-gray-600">
          <img
            src="./Child.png"
            alt="Contact Background"
            className="absolute inset-0 w-full h-full object-cover filter blur-sm brightness-75"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              About Us
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md"
            >
              <NavLink to="/" className="text-white hover:underline">
                Home
              </NavLink>{" "}
              <span className="mx-2">»</span>{" "}
              <span className="text-white">About us</span>
            </motion.div>
          </div>
          <ContactPage />
        </div>

      )}
      <div className="bg-[#f7f7f7] py-16 px-6 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">

        {/* LEFT SECTION - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[90%] sm:w-[400px] md:w-[450px] lg:w-[500px] h-auto">
            <img
              src={heartImage}
              alt="Heart Visual"
              className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>

        {/* RIGHT SECTION - Text */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          {/* Section Title */}
          <h4 className="text-orange-600 font-semibold flex items-center justify-center lg:justify-start gap-2 text-lg">
            <span role="img" aria-label="heart">❤️</span> About Us
          </h4>

          {/* Main Heading */}
          <h1 className="text-3xl playfair sm:text-4xl font-extrabold text-gray-800 leading-snug">
            Welcome to Udaanous
          </h1>

          {/* Description */}
          <p className="text-gray-600 inter text-base leading-relaxed">
            Udaanous strongly believes that every person, regardless of their circumstances, deserves compassion, care, and the opportunity to live a fulfilling life. Our mission is to support the most vulnerable—those who are neglected, abandoned, or forgotten. We focus on helping beggars, elderly individuals without family, pregnant women in distress, children with disabilities, and anyone in desperate need. Every day, we encounter people lacking food, shelter, healthcare, and emotional support—and we are here to help.
          </p>

          {/* Helping Team Badge */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-8 h-8"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF96_arIiGH4CDaw6Jbjc6MEShEuGR1tExig&s"
                alt="Helping Icon"
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div>
              <p className="text-orange-600 font-semibold">Start Helping Team</p>
              <p className="text-sm text-gray-500">There are many variations of solutions</p>
            </div>
          </div>

          {/* CTA & Contact */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-6">
            <NavLink
              to="/about"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-orange-500 px-6 py-3 text-white font-semibold transition-all duration-300 border-2 border-orange-600 hover:bg-white hover:text-orange-600 group w-full sm:w-auto"
            >
              <span className="flex items-center gap-2 transition-transform duration-300 transform group-hover:-translate-x-2">
                <FaArrowRight className="text-sm" />
                <span>Explore More</span>
              </span>
            </NavLink>


            <div className="flex items-center gap-4">
              <div className="p-3 border border-orange-600 rounded-full">
                <FaPhone className="text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call Any Time</p>
                <p className="font-bold text-gray-800">+91-7898012795</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Animated Hearts */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute bottom-10 right-6 lg:right-10 opacity-50"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
            alt="heart"
            className="w-10 h-10"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 1 }}
          className="absolute bottom-24 right-12 lg:right-20 opacity-50"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
            alt="heart"
            className="w-8 h-8"
          />
        </motion.div>
      </div>
      {location.pathname === '/about' && (
        <ContactPage />
      )}
    </>
  );
};

export default AboutPage;
