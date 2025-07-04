import React from "react";
import { assets } from "../assets/assets";

const categories = [
  {
    img: assets.Old,
    title: "Senior Citizens",
    desc: "Providing dignity, care, and companionship to the elderly in need.",
  },
  {
    img: assets.need,
    title: "People in Need",
    desc: "Supporting underprivileged individuals with food, shelter, and hope.",
  },
  {
    img: assets.women,
    title: "Expecting Mothers",
    desc: "Ensuring maternal health, nutrition, and safety during pregnancy.",
  },
  {
    img: assets.children,
    title: "Children with Disabilities",
    desc: "Empowering differently-abled children with care and opportunity.",
  },
];

const Categorycard = () => {
  return (
    <div className="px-6 md:px-20 py-16 bg-gradient-to-br from-orange-95 via-white to-orange-50">
      {/* Heading */}
      <div className="mb-16">
        <div className="inline-block text-left">
          <h2 className="text-3xl inter font-medium text-orange-500 sevillana mb-2">
            ❤️ Our Work
          </h2>
          <p className="text-4xl playfair md:text-5xl font-bold text-gray-800 mb-2 leading-tight">
            Supporting Lives, One Step at a Time
          </p>
          <div className="h-1 w-1/2 bg-pink-400 rounded-full animate-pulse mx-auto" />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
        {categories.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-xs bg-white border border-orange-100 shadow-md hover:shadow-xl rounded-2xl transition-transform duration-300 hover:-translate-y-1 flex flex-col"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-5 flex-1 flex flex-col justify-between">
              <h2 className="text-xl inter font-semibold text-gray-800 text-center mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 inter text-sm text-center leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorycard;
