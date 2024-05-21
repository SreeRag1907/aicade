import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { Button } from "../ui/Moving-border";
import { ArrowUpRight } from "react-feather";
import { BsStars } from "react-icons/bs";
import Card from "../card/Card";
import Footer from "../footer/Footer";

export default function Hero() {
  return (
    <>
      <div className="h-[90rem] w-full  flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-28 md:pt-20">
          {" "}
          {/* Adjusted top padding */}
          <div className="flex items-center justify-center p-2 mb-5 bg-white/10 backdrop-blur-md rounded-full mx-auto max-w-fit shadow-lg">
            <div className="flex items-center space-x-2">
              <BsStars className="text-white" />
              <span className="text-base bg-clip-text text-transparent bg-gradient-to-tr from-sky-300 via-purple-500 to-pink-400">
                The AI for your creativity
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-tr from-sky-300 via-purple-500 to-pink-400">
            Effortlessly Create Engaging
            <br />
            Games with AI
          </h1>
          <p className="mt-2 md:mt-4 font-normal text-lg text-neutral-300 max-w-lg text-center mx-auto">
            {" "}
            {/* Adjusted top margin */}
            Make Your Imagination Playable with just text, Experience the Magic
            of Our AI Game Builder.
          </p>
          <div className="text-center mt-6 md:mt-10">
            {" "}
            {/* Adjusted top margin */}
            <Button className="h-14 text-center text-lg dark:bg-slate-900 text-white dark:text-white bg-gradient-to-br from-purple-600 to-indigo-800 hover:brightness-125 transition duration-300 dark:border-slate-800">
              Join Waitlist
              <span className="px-1">
                <ArrowUpRight />
              </span>
            </Button>
          </div>
          <div className="mt-[150px] ">
            <Card />
            <div className="mt-20">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
