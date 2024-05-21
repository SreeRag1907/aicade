import React, { useState, useEffect } from "react";
import img from "./imgg.png";
import EmailSignup from "../email/EmailSignup";

const Card = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollPosition / maxScroll;
    setScrollProgress(progress);
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity and scale based on scroll progress
  const opacity = 0.3 + scrollProgress * 0.6;
  const scale = 0.5 + scrollProgress * 0.5;

  return (
    <div
      className="rounded-xl mx-4 sm:mx-16 h-auto sm:h-[30rem] bg-gradient-to-tr from-sky-300 via-purple-500 to-pink-400 shadow-lg px-4 sm:px-6 py-8"
      style={{
        opacity: opacity,
        transform: `perspective(1200px) scale(${scale})`,
      }}
    >
      {/* Your card content goes here */}
      <div className="py-4 sm:py-12 text-white font-semibold text-3xl sm:text-5xl flex items-center justify-center">
        <h1>aicade</h1>
      </div>
      <div className="text-white text-center">
        <p className="text-xl sm:text-3xl font-bold">
          Be the First to Revolutionize Game Creation!
        </p>
        <p className="text-sm sm:text-lg mt-4 sm:mt-9">
          Join Our Exclusive Waitlist Now And Be Among The First To Experience A
          World Where Creating Games Is As Fun And Easy As Playing Them!
        </p>
      </div>
      <EmailSignup />
    </div>
  );
};

export default Card;