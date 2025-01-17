import React from "react";
import { Button } from "./ui/button";

export default function About() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center border-t border-b  bg-gray-100/45">
      <div className="max-w-6xl mx-auto md:flex-row flex-col gap-8 flex items-center justify-between py-16 px-6">
        <div className="md:w-1/2 w-full flex flex-col justify-between h-full items-stretch gap-6">
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
        </div>
        <div className="md:w-1/2 h-full w-full">
          <div className="relative w-full h-[500px] overflow-hidden">
            <img
              src="/about.jpg"
              alt="About our teaching experience"
              className="absolute inset-0 w-full h-full object-cover object-center border-b-8 border-r-8 border-primary shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
