import React from 'react';
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import ContactPage from './ContactPage';

const About = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/about" && (
        <div className="relative w-full h-[250px] overflow-hidden bg-gray-600">
          <img
            src="/bg-2.jpg"
            alt="About Background"
            className="absolute inset-0 w-full h-full object-cover filter blur-sm brightness-60"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              About
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
              <span className="text-white">About</span>
            </motion.div>
          </div>
        </div>
      )}

      <section className='ml-0 lg:ml-28 mt-8 px-7 md:px-6 py-6 w-full lg:w-4/5'>
        <div className='flex items-center gap-2'>
          <h6 className='text-lg inter text-orange-500 font-bold'>❤️ Make Difference</h6>
        </div>
        <h2 className='text-4xl plafair font-bold mb-7'>Let's Come Together To Make A Positive Impact</h2>
        <p className='text-gray-800 inter mb-3 text-md opacity-70'>
          Udaanous strongly believes that every person regardless of circumstances must have compassion and care, and a chance to make life fulsome. Our mission lies in reaching out and helping the most vulnerable members of society—those who are variously neglected, abandoned, or forgotten. Our focus is beggars, elderly people shunned by their families, pregnant women in trouble, children with disabilities, and anyone who is in dire need of support.
          <br /><br />
          Udaanous aims to change it—to provide a way to all those who have nowhere to turn. Its vision is of a world where no one should suffer in silence or be ignored. Such society will have for each person dignity and esteem irrespective of age and condition. We offer care for abandoned seniors, support for pregnant women, therapy and education for disabled children, and empowerment for beggars through food, shelter, and rehabilitation.
          <br /><br />
          We are committed to creating lasting change. Our programs aim to meet immediate needs while ensuring long-term dignity and independence. We invite partnerships with foundations, organizations, and compassionate individuals. Your contributions help us open doors to hope and a brighter future for the most deserving.
        </p>
      </section>

      {/* Image Showcase Section */}
      <section className='relative flex flex-col lg:flex-row ml-0 lg:ml-32 mt-8 px-7 md:px-6 py-6 w-full lg:w-2/5 gap-8'>
        <img src="/Img/gallery-26.png" alt="Gallery 1" className='rounded-xl border-b-8 border-yellow-400 hover:-translate-y-3 duration-500 z-10' />
        <img src="/Img/badge-1.png" alt="Badge" className='absolute top-64 left-[30%] lg:bottom-28 lg:left-[86%] bg-red-500 rounded-full py-7 px-4 hover:-translate-y-3 duration-500 z-20' />
        <img src="/Img/gallery-29.png" alt="Gallery 2" className='rounded-xl border-b-8 border-red-300 hover:-translate-y-3 duration-500 z-10 hidden lg:block' />
      </section>

      {/* Co-Founder Section */}
<section className='bg-gray-100 bg-[url("/Img/lines-2.png")] bg-blend-color-burn bg-cover'>
  <div className='flex items-center justify-center mt-24 lg:mt-5 gap-16 lg:gap-24 px-8 lg:px-20 pt-16 pb-10 flex-col lg:flex-row'>
    <img
      src="/Img/rashmi.jpeg"
      alt="Rashmi Kamalasanan"
      className='w-100 h-100 rounded-full object-cover shadow-lg ring-4 ring-gray-100'
    />

    <div className='max-w-xl text-center lg:text-left'>
      <h6 className='text-orange-500 inter font-bold mb-3 text-2xl'>❤️ Co-Founder</h6>
      <h1 className='text-4xl inter font-bold'>Rashmi Kamalasanan</h1>
      <p className='text-gray-800 inter mt-4 text-md mb-3 opacity-70'>
        Rashmi Kamalasanan, co-founder of Udaanous Foundation, is driven by a passion for social impact. She advocates for sustainable development and equal opportunities, especially in education and skill development. Committed to inclusivity, Rashmi ensures marginalized communities access the resources needed to thrive.
        <br /><br />
        Under her leadership, Udaanous promotes educational access, skill development, and eco-friendly initiatives. Her holistic approach empowers individuals and inspires a more equitable, sustainable, and inclusive future for all.
      </p>
    </div>
  </div>
</section>


      {/* Contact Page Integration */}
      {location.pathname === '/about' && <ContactPage />}
    </>
  );
};

export default About;
