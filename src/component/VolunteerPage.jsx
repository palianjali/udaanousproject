import React, { useState, useRef } from "react";

const AccordionBox = ({ index, activeIndex, toggleBox, title, content }) => {
  const contentRef = useRef(null);
  const isActive = activeIndex === index;

  return (
    <div
      onClick={() => toggleBox(index)}
      className="border border-gray-300 rounded-xl p-4 mb-4 bg-white shadow-sm cursor-pointer transition-all duration-300"
    >
      <div className="flex justify-between items-center">
        <span
          className={`font-medium text-base transition-colors duration-300 ${
            isActive ? "text-orange-600" : "text-gray-800"
          }`}
        >
          {title}
        </span>
        <span
          className={`text-xl transform transition-transform duration-300 ${
            isActive ? "rotate-90 text-orange-600" : "rotate-0 text-gray-800"
          }`}
        >
          →
        </span>
      </div>

      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: isActive ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <p className="text-gray-600 text-sm mt-3 leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

const VolunteerPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleBox = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="w-full min-h-screen bg-[#f7f7f7] bg-cover bg-center bg-no-repeat px-4 py-10"
      style={{ backgroundImage: "url('./bg-main.jpg')" }} // Change to your desired bg image
    >
      <div className="bg-white/90 rounded-3xl shadow-xl max-w-7xl mx-auto flex flex-col md:flex-row overflow-hidden">
        {/* Left Section - Image */}
        <div className="md:w-1/2 p-6 flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 border-[3px] border-orange-500 rounded-2xl pointer-events-none m-[10px] z-10" />
            <img
              src="./bg-1.jpg"
              alt="Volunteers"
              className="rounded-2xl w-full h-auto object-cover relative z-0"
            />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="md:w-1/2 p-6 md:p-10">
          <p className="text-3xl inter text-orange-600 font-medium mb-2 sevillana-regular">
            ❤️ Join us
          </p>
          <h2 className="text-3xl md:text-4xl playfair font-bold text-gray-800 mb-4 prata-regular leading-snug">
            Why We Need You <br className="hidden md:block" />
            Become a Volunteer
          </h2>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">
            We help companies develop powerful corporate social responsibility,
            grantmaking, and employee engagement strategies.
          </p>

          {/* Accordion Boxes */}
          <AccordionBox
            index={1}
            activeIndex={activeIndex}
            toggleBox={toggleBox}
            title="Recognition and Fulfillment"
            content="Consectetur adipiscing elit. Aenean scelerisque augue vitae consequat. Justo eget congue velit in cursus. Elearning is suitable for students, professionals, and anyone interested."
          />
          <AccordionBox
            index={2}
            activeIndex={activeIndex}
            toggleBox={toggleBox}
            title="Why Join Us as a Volunteer?"
            content="Becoming a volunteer helps you grow personally and professionally while giving back to society. It builds community, connection, and impact."
          />
          <AccordionBox
            index={3}
            activeIndex={activeIndex}
            toggleBox={toggleBox}
            title="Be Part of a Community"
            content="Join like-minded individuals who are committed to making a difference. Collaborate, learn, and grow together as a powerful team."
          />
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;
