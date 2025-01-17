import React from "react";
import { Button } from "./ui/button";

export default function Services() {
  return (
    <div className="min-h-screen py-4 ">
      <div className="max-w-6xl flex flex-col items-center gap-8 mx-auto px-4">
        <div className=" w-full flex flex-col  items-center gap-4">
          <h2 className="border-l-4 pl-2 border-primary md:text-xl font-semibold">
            OUR SERVICES
          </h2>
          <h1 className="lg:text-5xl font-semibold md:text-4xl text-3xl">
            Quran Academy Services
          </h1>
          <p className="text-gray-400 max-w-4xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
        </div>
      </div>
    </div>
  );
}
