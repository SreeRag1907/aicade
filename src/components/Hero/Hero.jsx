import React from "react";
import { Button } from "../ui/Moving-border";
import { ArrowUpRight } from "react-feather";
import { BsStars } from "react-icons/bs";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Hero() {
  const scrollToCard = () => {
    // Scroll to the element with id="card-section"
    document
      .getElementById("card-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-slate-950">
        {/* Background Image */}
        <div className="absolute inset-0 bg-custom-image bg-cover bg-center -translate-y-80"></div>

        {/* Overlay */}
        <div className="relative  min-h-screen">
          <div className="p-4  max-w-7xl mx-auto relative z-10 w-full pt-28 md:pt-20">
            <div className="flex items-center justify-center sm:mt-20 p-2 mb-5 bg-white/10 backdrop-blur-md rounded-full mx-auto max-w-fit shadow-lg">
              <div className="flex items-center space-x-2">
                <BsStars className="text-white" />
                <span className="text-base bg-clip-text text-transparent bg-gradient-to-tr from-sky-300 via-purple-500 to-pink-400">
                  The AI for your creativity
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-tr from-sky-300 via-purple-500 to-pink-400 animate-bounce-fade-in">
              Effortlessly Create Engaging
              <br />
              Games with AI
            </h1>
            <p className="mt-2 md:mt-4 font-normal text-xl text-neutral-300 max-w-lg text-center mx-auto">
              Make Your Imagination Playable with just text, Experience the
              Magic of Our AI Game Builder.
            </p>
            <div className="text-center mt-6 md:mt-10">
              <Button
                className="h-14 text-center text-lg dark:bg-slate-900 text-white dark:text-white bg-gradient-to-br from-purple-600 to-indigo-800 hover:brightness-125 transition duration-300 dark:border-slate-800"
                onClick={scrollToCard}
              >
                Join Waitlist
                <span className="px-1">
                  <ArrowUpRight />
                </span>
              </Button>
            </div>
            <div id="card-section" className="mt-[150px]">
              <Card />
              <div className="mt-20">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
