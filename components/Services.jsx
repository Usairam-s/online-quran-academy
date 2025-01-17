import React from "react";
import { Button } from "./ui/button";
import { servicesData } from "@/constants";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="min-h-screen mb-12 py-20 bg-repeat w-full h-full text-primary-100  heropattern-architect-gray-100">
      <div className="max-w-6xl flex flex-col items-center md:gap-16 gap-10 mx-auto px-4">
        <div className=" w-full flex flex-col  items-center gap-4">
          <h2 className="border-l-4 pl-2 border-primary md:text-xl font-semibold">
            OUR SERVICES
          </h2>
          <h1 className="lg:text-5xl text-center font-semibold md:text-4xl text-3xl">
            Quran Academy Services
          </h1>
          <p className="text-gray-400 max-w-4xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 items-center w-full">
          {servicesData.map((item, idx) => (
            <ServiceCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
