import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Alert from "./Alert";
import ContactPage from "./ContactPage";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_vy1337v",
        "template_yfl52ia",
        {
          from_name: formData.name,
          to_name: "Dhruv",
          from_email: formData.email,
          to_email: "cartwish08@gmail.com",
          message: formData.message,
        },
        "YZFetnggaj8usPkCd"
      );

      showAlertMessage("success", "Your message has been sent!");

      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="relative w-full h-[250px] overflow-hidden bg-gray-600">
        <img
          src="./bg-2.jpg"
          alt="Join Background"
          className="absolute inset-0 w-full h-full object-cover filter blur-sm brightness-60"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Join Us
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
            <span className="text-white">Join Us</span>
          </motion.div>
        </div>
      </div>

<section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-[#fff1e6] to-[#f97316] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">

        {/* Alert */}
        {showAlert && (
          <div className="absolute top-5 z-20 w-full flex justify-center px-4">
            <Alert type={alertType} text={alertMessage} />
          </div>
        )}

        {/* Form Wrapper Only (no image) */}
        <div className="relative z-10 w-full max-w-xl mx-auto bg-[#111827] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg">

          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">Join Our Cause</h2>
          <p className="text-neutral-400 text-sm sm:text-base mb-8">
            We'd love to collaborate with passionate individuals. Fill out the form and our team will contact you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-white mb-1 font-medium">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Udaanous"
                className="w-full px-4 py-2 rounded-md bg-[#1F2937] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-1 font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="info@udaanous.com"
                className="w-full px-4 py-2 rounded-md bg-[#1F2937] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-1 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about yourself."
                className="w-full px-4 py-2 rounded-md bg-[#1F2937] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-orange-500 text-white rounded-md font-semibold hover:opacity-90 transition"
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </section>

      <ContactPage />
    </>
  );
};

export default JoinUs;
