import React, { useState, useEffect } from "react";
import img from "./imgg.png";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import { Menu, X, ArrowUpRight } from "react-feather";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const scrollToCard = () => {
    // Scroll to the element with id="card-section"
    document.getElementById("card-section").scrollIntoView({ behavior: "smooth" });
  };

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getNavbarStyle = () => {
    const scrollPosition = Math.min(225, scrollY);
    const opacity = 1 - scrollPosition * 0.003;
    const scale = 1 - scrollPosition * 0.0008;
    const translationFactor = 0.4;
    const translateY = -Math.min(225, scrollY * translationFactor);
    return {
      opacity: opacity.toFixed(6),
      transform: `perspective(1200px) translateX(0px) translateY(${translateY}px) scale(${scale.toFixed(
        6
      )}) rotate(0deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px)`,
    };
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-lg transition-all duration-300 w-full bg-opacity-70"
        style={getNavbarStyle()}
      >
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between mx-32 items-center py-4">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-auto" src={img} alt="Logo" />
            </div>

            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a
                className="group border-none bg-black rounded-full flex items-center h-10 gap-x-3 cursor-pointer shadow-none opacity-100 p-3 transition-all duration-700 ease-in-out"
                tabIndex="0"
                style={{
                  width: "auto",
                  borderBottomWidth: "0px",
                  borderColor: "rgba(0, 0, 0, 0)",
                  borderLeftWidth: "0px",
                  borderRightWidth: "0px",
                  borderStyle: "solid",
                  borderTopWidth: "0px",
                  backgroundColor: "rgb(0, 0, 0)",
                  borderRadius: "36px",
                  boxShadow: "none",
                  opacity: "1",
                }}
              >
                <Link to="/signin" className="group-hover:px-3 transition-all duration-300 ease-in-out">
                  View Demo
                </Link>
                <span className="group-hover:scale-125 transition-transform duration-700 ease-in-out">
                  <ArrowUpRight />
                </span>
              </a>

              <a className="border-none h-10 items-center bg-gradient-to-br from-purple-600 to-indigo-800 rounded-full flex gap-x-3 shadow-none opacity-100 p-4 transition duration-300 cursor-pointer ease-in-out hover:brightness-125"  onClick={scrollToCard}>
                Join Waitlist
                <span>
                  <ArrowUpRight />
                </span>
              </a>
            </div>
            <div className="lg:hidden flex items-center">
              <button onClick={toggleNavbar} className="focus:outline-none">
                {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileDrawerOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-16 z-50 h-[400px] bg-black  text-white py-12 animate-fade-in-down"
          style={{ transform: "translateY(100%)" }}
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-col space-y-4 items-center">
              <a className="border-none h-10 items-center bg-gradient-to-br from-purple-600 to-indigo-800 rounded-full mb-5 flex gap-x-3 shadow-none opacity-100 p-4 transition duration-300 cursor-pointer ease-in-out hover:brightness-125"  onClick={scrollToCard}>
                Join Waitlist
                <span>
                  <ArrowUpRight />
                </span>
              </a>

              <a
                className="group  bg-black  rounded-full flex items-center h-10 gap-x-3 cursor-pointer shadow-none opacity-100 p-3 transition-all duration-700 ease-in-out"
                tabIndex="0"
                style={{
                  width: "auto",
                  borderBottomWidth: "0px",
                  borderColor: "rgba(0, 0, 0, 0)",
                  borderLeftWidth: "0px",
                  borderRightWidth: "0px",
                  borderStyle: "solid",
                  borderTopWidth: "0px",
                  backgroundColor: "rgb(0, 0, 0)",
                  borderRadius: "36px",
                  boxShadow: "none",
                  opacity: "1",
                }}
              >
                <Link to="/signin" className="group-hover:px-3 transition-all duration-300 ease-in-out">
                  View Demo
                </Link>
                <span className="group-hover:scale-125 transition-transform duration-700 ease-in-out">
                  <ArrowUpRight />
                </span>

              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;