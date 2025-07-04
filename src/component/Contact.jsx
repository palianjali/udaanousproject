import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Contact = () => {
  const location = useLocation();
  return (
    <div className="w-full font-sans bg-white text-gray-900">
      {/* Hero Section */}
      {location.pathname === "/contact" && (
        <div className="relative w-full h-[250px] overflow-hidden bg-gray-600">
          <img
            src="./bg-2.jpg"
            alt="Contact Background"
            className="absolute inset-0 w-full h-full object-cover filter blur-sm brightness-60"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Contact Us
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
              <span className="text-white">Contact us</span>
            </motion.div>
          </div>
        </div>
      )}

      {/* Contact Cards */}
      <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Phone */}
        <motion.a
          href="tel:+917898012795"
          className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
        >
          <div className="bg-orange-500 text-white p-4 rounded-full mb-4">
            <FaPhoneAlt size={24} />
          </div>
          <h4 className="text-sm text-gray-600 mb-1">Phone number</h4>
          <p className="text-lg font-semibold text-black">+91 7898012795</p>
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:info@udaanous.com"
          className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
        >
          <div className="bg-orange-500 text-white p-4 rounded-full mb-4">
            <MdEmail size={24} />
          </div>
          <h4 className="text-sm text-gray-600 mb-1">Email address</h4>
          <p className="text-lg font-semibold text-black">info@udaanous.com</p>
        </motion.a>

        {/* Address (not clickable) */}
        <motion.div
          className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
        >
          <div className="bg-orange-500 text-white p-4 rounded-full mb-4">
            <FaMapMarkerAlt size={24} />
          </div>
          <h4 className="text-sm text-gray-600 mb-1">Office Address</h4>
          <p className="text-lg font-semibold text-black text-center">
            F No. S11 Dharampeth Tower<br />
            P No. 209 WHC Road<br />
            Nagpur 440010
          </p>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        className="max-w-6xl mx-auto px-4 pb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Find Us on the Map
        </h2>
        <div className="w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
          <iframe
            title="office-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.928003530495!2d79.06327597528066!3d21.115252980534938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c079fffffff1%3A0xe16540b0c6a6fd9!2sWHC%20Road%2C%20Dharampeth%2C%20Nagpur%2C%20Maharashtra%20440010!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;