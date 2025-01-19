"use client";
import React from "react";
import { Button } from "./ui/button";
import { servicesData } from "@/constants";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div
      className="min-h-screen mb-12 py-20 bg-repeat w-full h-full text-primary-100  heropattern-architect-gray-100"
      id="services"
    >
      <div className="max-w-6xl flex flex-col items-center md:gap-16 gap-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-full flex flex-col items-center gap-4">
            <h2 className="border-l-4 pl-2 border-primary md:text-xl font-semibold">
              OUR SERVICES
            </h2>
            <h1 className="lg:text-5xl text-center font-semibold md:text-4xl text-3xl">
              Quran Academy Services
            </h1>
            <p className="text-gray-400 max-w-4xl text-center">
              At our Quran Academy, we provide a range of services to help you
              deepen your understanding of the Quran, whether you're just
              starting or seeking advanced knowledge. Our offerings include
              personalized Quran lessons
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 }, // Parent initial state
            visible: {
              opacity: 1, // Parent visible state
              transition: {
                staggerChildren: 0.2, // Controls the delay between children animations
              },
            },
          }}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 items-center w-full"
        >
          {servicesData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 }, // Child initial state
                visible: { opacity: 1, y: 0 }, // Child visible state
              }}
              transition={{ duration: 1 }} // Adjust child animation duration
            >
              <ServiceCard item={item} />
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            // visible: { opacity: 1, y: 0 },
            visible: {
              transition: {
                staggerChildren: 0.3, // Controls stagger timing
              },
            },
          }}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 items-center w-full"
        >
          {servicesData.map((item, idx) => (
            <ServiceCard key={idx} item={item} />
          ))}
        </motion.div> */}
      </div>
    </div>
  );
}
