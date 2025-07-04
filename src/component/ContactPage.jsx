import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo1 from "../assets/logo-1.png";
import Child from "../assets/Child.png";
import Water from "../assets/water.png";
import Contact from "./Contact";
import { useLocation, NavLink } from "react-router-dom";

const ContactPage = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/contact" && <Contact />}

      <div className="bg-[#1E252f] text-white">
        {/* Footer Main Section */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl inter font-bold flex items-center gap-2">
              <img src={logo1} alt="Logo" className="w-8 h-8 object-contain" />
              Udaanous
            </h2>

            <p className="mt-4 inter text-gray-400 leading-relaxed">
              Together we rise, lifting hearts and hopes. Your kindness today
              builds a brighter tomorrow.
            </p>

            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-[#1e2633] hover:bg-[#f0541d] p-2 rounded text-white"
                  aria-label="Social Link"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[#f0541d] w-fit">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300">
              {[
                { name: "About", to: "/about" },
                { name: "Media", to: "/media" },
                { name: "Team", to: "/team" },
                { name: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="hover:text-white inter transition-all duration-200"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-[#f0541d] w-fit">
              Recent Posts
            </h3>

            {/* Post 1 */}
            <div className="flex items-start gap-4 mb-6">
              <img
                src={Child}
                alt="Post"
                className="w-20 h-20 object-cover rounded shadow-md"
              />
              <div className="text-sm text-gray-300">
                <p className="text-xs mb-1 text-gray-400">📅 July 01, 2025</p>
                <p className="font-medium inter text-white">
                  Bringing smiles to underprivileged children through care and
                  support.
                </p>
              </div>
            </div>

            {/* Post 2 */}
            <div className="flex items-start gap-4">
              <img
                src={Water}
                alt="Post"
                className="w-20 h-20 object-cover rounded shadow-md"
              />
              <div className="text-sm text-gray-300">
                <p className="text-xs mb-1 text-gray-400">📅 June 30, 2025</p>
                <p className="font-medium inter text-white">
                  Clean water changes lives — drop by drop.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[#f0541d] w-fit">
              Contact Us
            </h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>📧 info@udaanous.com</p>
              <p>📞 +91-7898012795</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-[#f0541d] text-white text-sm px-4 py-4">
          <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center">
            <p>© 2025 Udaanous. All rights reserved</p>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <NavLink to="#">Terms & Conditions</NavLink>
              <NavLink to="#">Privacy Policy</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
