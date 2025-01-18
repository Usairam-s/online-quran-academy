"use client";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion"; // Import framer-motion
import { useInView } from "react-intersection-observer"; // Import the Intersection Observer
import { servicesData } from "@/constants"; // Assuming servicesData is defined elsewhere
import ServiceCard from "./ServiceCard";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once when it comes into view
    threshold: 0.6, // Trigger animation when 20% of the section is visible
  });

  const leftVariant = {
    hidden: { opacity: 0, x: -100 }, // Start from the left, hidden with opacity 0
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Animate to full opacity and position
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 }, // Start from the right, hidden with opacity 0
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Animate to full opacity and position
  };

  return (
    <div
      className="min-h-[80vh] flex items-center justify-center border-t border-b bg-gray-100/45"
      id="about"
      ref={ref} // Set the ref to trigger intersection observer on this section
    >
      <div className="max-w-6xl mx-auto md:flex-row flex-col gap-8 flex items-center justify-between py-16 px-6">
        {/* Left Side with Animation */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col justify-between h-full items-stretch gap-6"
          variants={leftVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Trigger animation when the section is in view
        >
          <h2 className="border-l-4 pl-2 border-primary md:text-xl font-semibold">
            ONLINE QURAN ACADEMY
          </h2>
          <h1 className="lg:text-5xl font-semibold md:text-4xl text-3xl">
            About our teaching experience
          </h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <Button className="px-10 w-fit font-semibold">Contact us</Button>
        </motion.div>

        {/* Right Side with Animation */}
        <motion.div
          className="md:w-1/2 h-full w-full"
          variants={rightVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Trigger animation when the section is in view
        >
          <div className="relative w-full h-[500px] overflow-hidden">
            <img
              src="/about.jpg"
              alt="About our teaching experience"
              className="absolute inset-0 w-full h-full object-cover object-center border-b-8 border-r-8 border-primary shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
