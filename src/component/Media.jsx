import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ContactPage from "./ContactPage";

const Media = () => {
  const images = [
    { name: "img1", image: "./m8.jpeg" },
    { name: "img2", image: "./m2.jpg" },
    { name: "img3", image: "./m3.png" },
    { name: "img4", image: "./m4.png" },
    { name: "img5", image: "./m5.heic" },
    { name: "img6", image: "./m6.png" },
    { name: "img7", image: "./m7.jpg" },
    { name: "img8", image: "./m1.jpg" },
    { name: "img9", image: "./m9.heic" },
    { name: "img10", image: "./m10.heic" },
    { name: "img11", image: "./m11.heic" },
    { name: "img12", image: "./m12.heic" },
    { name: "img13", image: "./m13.heic" },
    { name: "img14", image: "./m14.heic" },
    { name: "img15", image: "./m15.heic" },
    { name: "img16", image: "./m16.jpg" },
  ];
  const location = useLocation();
  return (
    <>
      {/* Hero Section */}
      {location.pathname === "/media" && (
        <div className="relative w-full h-[250px] overflow-hidden bg-gray-600">
          <img
            src="./p-1.jpeg"
            alt="Contact Background"
            className="absolute inset-0 w-full h-full object-cover filter blur-sm brightness-75"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Our Media
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
              <span className="text-white">Media</span>
            </motion.div>
          </div>
        </div>
      )}

      <div className="relative px-4 md:px-10 py-8 md:py-16">
        {/* Light background overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 -z-10 rounded-xl"
          style={{ backgroundImage: "url('./img5.jpg')" }}
        ></div>

        {/* Section Header */}
        <div className="px-4 md:px-10">
          {/* Wrapper for heading and subheading */}
          <div className="ml-2 md:ml-1 mb-12">
            <h2 className="text-3xl inter font-medium text-orange-500 sevillana mb-2">
              ❤️ Our Media
            </h2>

            <p className="text-2xl playfair md:text-5xl font-medium text-gray-800 playfair">
              Stories of Change and Impact
            </p>
          </div>
        </div>


        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:px-10">
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img.image}
                alt={img.name}
                className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-300 shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
      {location.pathname === '/media' && (
        <ContactPage />
      )}
    </>
  );
};

export default Media;
