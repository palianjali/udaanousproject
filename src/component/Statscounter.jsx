import React, { useEffect, useRef, useState } from "react";

// Stats Data
const stats = [
  { label: "Fund Raised", start: 8400, value: 8803 },
  { label: "Volunteers", start: 80, value: 480 },
  { label: "Causes for Donation", start: 5800, value: 6208 },
  { label: "Happy People", start: 560, value: 960 },
];

const StatBox = ({ label, value, start }) => {
  const [count, setCount] = useState(start);
  const [visible, setVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setVisible(true);
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animateCount = () => {
    const duration = 2000;
    const steps = value - start;
    const incrementTime = steps > 0 ? duration / steps : duration;

    let current = start;
    const interval = setInterval(() => {
      current++;
      setCount(current);
      if (current >= value) clearInterval(interval);
    }, incrementTime);
  };

  return (
    <div
      ref={ref}
      className={`flex-1 min-w-[140px] max-w-[180px] text-center px-3 py-3 
        bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
        shadow-md transition-all duration-700 
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
    >
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow tracking-wide">
        {count}
      </h2>
      <p className="text-white mt-1 text-xs sm:text-sm font-medium">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <div className="relative mt-6 mb-8 px-4 py-4 bg-gradient-to-r from-orange-500 to-gray-800 rounded-full shadow-2xl max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-4 sm:gap-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/bg-pattern.svg')] bg-cover bg-center pointer-events-none rounded-full" />

      {stats.map((item, index) => (
        <StatBox key={index} {...item} />
      ))}
    </div>
  );
};

export default StatsCounter;
