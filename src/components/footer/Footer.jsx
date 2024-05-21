import React from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="shadow m-2 md:m-4 dark:bg-gray-800 animate-fade-in-up">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl md:text-4xl mx-4 md:mx-14 text-white text-center block">
              aicade
              <br />
              <span className="text-sm md:text-lg mx-4 md:mx-14 text-center">
                Game Creation for All!
              </span>
            </span>
          </div>
          <ul className="flex flex-wrap items-center justify-center mt-3 text-xl md:text-3xl mx-4 md:mx-24 gap-2 font-medium text-white">
            <li>
              <a href="mailto:pushkar@braincade.in">
                <HiOutlineEnvelope />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/company/braincade/">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-600 mx-8 md:mx-32" />
        <div className="text-center text-xs text-gray-500 pb-2">
          © 2024 Braincade Technologies Pvt. Ltd | All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
