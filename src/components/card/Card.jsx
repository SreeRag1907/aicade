import React, { useState, useEffect } from "react";
import EmailSignup from "../email/EmailSignup";

const Card = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollPosition / maxScroll;
    const adjustedProgress = Math.min(progress, 0.6); // Stop animation at 60% of maxScroll
    setScrollProgress(adjustedProgress);
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity and scale based on scroll progress
  const opacity = 0.4 + scrollProgress * 0.8;
  const scale = 0.5 + scrollProgress * 0.8;

  return (
    <div
      className="rounded-xl mx-4 sm:mx-16 sm:mt-5 h-auto sm:h-[37rem] bg-custom-bg shadow-lg px-4 sm:px-6 py-8"
      style={{
        opacity: opacity,
        transform: `perspective(1200px) scale(${scale})`,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {/* Your card content goes here */}
      <div className="py-4 sm:py-12 text-white font-semibold text-3xl sm:text-7xl flex items-center justify-center" style={{ fontFamily: "Poppins, sans-serif" }}>
        <h1>aicade</h1>
      </div>
      <div className="text-white text-center">
        <p className="text-xl sm:text-4xl font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>
          Be the First to Revolutionize Game Creation!
        </p>
        <p className="text-sm sm:text-xl mt-4 sm:mt-9" style={{ fontFamily: "Roboto, sans-serif" }}>
          Join Our Exclusive Waitlist Now And Be Among The First To Experience A
          World Where Creating<br/> Games Is As Fun And Easy As Playing Them!
        </p>
      </div>
      <EmailSignup />
    </div>
  );
};

export default Card;
