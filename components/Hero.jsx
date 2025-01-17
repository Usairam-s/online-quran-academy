import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('/main1.jpg')", // Replace with your image path
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
      }}
      className="min-h-screen relative rounded-b-xl shadow-xl overflow-hidden"
    >
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
