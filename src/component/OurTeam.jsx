import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import ContactPage from "./ContactPage";

const OurTeam = () => {
  const teamData = [
    { name: "Rashmi", role: "CEO", image: "/img4.png" },
    { name: "Pallavi", role: "Senior", image: "/img3.jpg" },
    { name: "Ekta Jain", role: "HR", image: "/img1.jpg" },
  ];

  const iconVariants = {
    initial: { opacity: 0, scale: 0.5, y: 20 },
    hover: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, type: "spring" },
    }),
  };

  const iconColors = ["#E1306C", "#3b5998", "#1DA1F2"];
  const location = useLocation();


  return (
    <>
      {location.pathname === "/team" && (
        <div className="relative w-full h-[250px] overflow-hidden bg-gray-600">
          <img
            src="./p-2.jpeg"
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
              Our Team
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md"
            >
              <NavLink to="/" className="text-white hover:underline">
                Home
              </NavLink>{" "}
              <span className="mx-2">»</span>{" "}
              <span className="text-white">Team</span>
            </motion.div>
          </div>
        </div>
      )}

      <div className="sm:m-10 m-4 rounded-2xl bg-none sm:bg-[url('./img7.png')] bg-cover bg-no-repeat bg-center">
        {/* Header Animation on Scroll */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
        >
          <div className="p-10 sm:p-20 flex flex-col gap-4">
            <h1 className="text-3xl text-orange-500 font-serif traking-wide">
              <span>❤️</span> Our Team
            </h1>
            <p className="text-4xl playfair font-bold text-gray-800 md:w-2/3 prata-regular leading-tight">
              Skilled Legal Professionals Dedicated to You
            </p>
          </div>

          <div className="pr-10 sm:pr-20">
            <NavLink to="/join" className="w-fit">
              <button className="border-2 inter border-orange-500 bg-orange-500 text-white font-semibold px-5 py-2 rounded-full transition hover:bg-transparent hover:text-orange-500">
                Join Us
              </button>
            </NavLink>
          </div>
        </motion.div>

        {/* Cards Animation on Scroll */}
        <motion.div
          className="p-6 flex gap-10 sm:gap-16 items-start justify-center flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, duration: 0.8 },
            },
          }}
        >
          {teamData.map((member, index) => (
            <motion.div
              whileHover="hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index}
              className={`group bg-white w-[300px] h-[400px] flex flex-col rounded-2xl shadow-lg shdoaw-gray-500 overflow-hidden relative ${index === 1 ? "lg:-mt-5" : ""
                }`}
            >
              {/* Image + Hover Icons */}
              <div className="relative w-full h-[300px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full transition duration-300 ease-in-out group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[faInstagram, faFacebook, faTwitter].map((icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      className="rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
                      custom={i}
                      variants={iconVariants}
                      style={{ color: iconColors[i], backgroundColor: "white" }}
                    >
                      <FontAwesomeIcon icon={icon} size="lg" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Name & Role */}
              <div className="text-center flex-1 flex flex-col justify-center items-center p-4 text-gray-800 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <h1 className="text-xl playfair font-semibold font-serif">{member.name}</h1>
                <p className="text-md font-medium font-serif">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {location.pathname === '/team' && (
        <ContactPage />
      )}
    </>
  );
};

export default OurTeam;
