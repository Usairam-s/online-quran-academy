"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const images = ["/main1.jpg", "/main2.jpg", "/main3.jpg"]; // Add image paths
  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000); // Change every 7 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="min-h-screen relative rounded-b-xl shadow-xl overflow-hidden"
      id="home"
    >
      {/* Framer Motion Image Container */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 3, ease: "easeInOut" }, // Smooth fade in/out
          }}
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            inset: 0,
            zIndex: -1,
          }}
        />
      </AnimatePresence>
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative  flex flex-col gap-4 font-light tracking-widest max-w-6xl mx-auto px-6  py-60 text-white">
        <h2 className="border-l-4 pl-2 border-primary text-white md:text-xl font-semibold ">
          ONLINE QURAN ACADEMY
        </h2>
        <h1 className="lg:text-5xl font-semibold max-w-[700px] md:text-4xl text-3xl">
          Quran Pak For All Person Of World
        </h1>
        <p className="text-sm md:text-base max-w-[700px] text-gray-400">
          Learn the Quran with expert guidance in a convenient online
          environment. Our courses are designed for all ages and levels, helping
          you connect with the Quran effectively and meaningfully.
        </p>
        <Button className="px-10 w-fit font-semibold">Contact us</Button>
      </div>
    </div>
  );
}
