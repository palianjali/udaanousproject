import React from "react";
import { FaHeart, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Poor from "../assets/poor.jpg";
import AboutPage from "./AboutPage"
import OurTeam from "./OurTeam";
import Categorycard from "./Categorycard";
import Media from "./Media";
import StatsCounter from "./Statscounter";
import VolunteerPage from "./VolunteerPage";
import ContactPage from "./ContactPage";

const Landing = () => {
  return (
    <>
      <div className="relative min-h-screen bg-gray-900 bg-[url('/Img/banner-bg-shape.svg')] bg-cover bg-center bg-no-repeat bg-blend-multiply text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 overflow-hidden">

        {/* Left Content */}
        <div className="max-w-2xl z-10 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <FaHeart className="text-red-500 text-lg" />
            <h3 className="text-lg text-orange-500 font-semibold uppercase tracking-wide">
              Change The World Together
            </h3>
          </div>

          <h1 className="text-4xl playfair sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            For The People & Cause You Care About
          </h1>

          <p className="text-gray-300 inter text-base leading-relaxed mb-6">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. Help us bring
            meaningful change to the lives that need it most.
          </p>

          <div>
            <Link
              to="/donate"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-orange-500 px-6 py-3 text-white font-semibold transition-all duration-300 border-2 border-orange-500 hover:bg-white hover:text-orange-500 group"
            >
              <span className="flex items-center gap-2 inter transition-transform duration-300 transform group-hover:-translate-x-2">
                <FaArrowRight className="text-sm" />
                <span>Make Donation</span>
              </span>
            </Link>
          </div>
        </div>

        {/* Right Half Circle Image */}
        <div className="hidden lg:block absolute right-[-220px] top-1/2 transform -translate-y-1/2 w-[800px] h-[800px] rounded-full overflow-hidden shadow-2xl">
          <img
            src="/Child.png"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mobile Image (below content) */}
        <div className="mt-10 lg:hidden w-full max-w-md mx-auto rounded-full overflow-hidden shadow-lg">
          <img
            src={Poor}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <AboutPage />
      <OurTeam />
      <Categorycard />
      <Media />
      <StatsCounter />
      <VolunteerPage />
      <ContactPage />
    </>
  );
};

export default Landing;
