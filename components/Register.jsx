"use client";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <div className="md:min-h-[80vh] min-h-[50vh] py-16 flex items-center justify-center border-t border-b  bg-gray-100/45">
      <div className="max-w-6xl w-full mx-auto md:flex-row flex-col gap-8 flex items-center justify-between  px-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="md:w-1/2 md:block h-full w-full hidden"
        >
          <div className="relative w-full h-[500px] overflow-hidden">
            <img
              src="/reg.jpg"
              alt="About our teaching experience"
              className="absolute inset-0 w-full h-full object-cover object-center border-t-8 border-l-8 border-primary shadow-lg"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="md:w-1/2 w-full flex flex-col justify-between h-full items-stretch gap-6"
        >
          <h2 className="border-l-4 pl-2 border-primary md:text-xl font-semibold">
            STEPS TO LEARN
          </h2>
          <h1 className="lg:text-5xl font-semibold md:text-4xl mb-4 text-3xl">
            Begin Learning by Following Steps
          </h1>
          <div className="flex flex-col gap-8 justify-between">
            <div className="flex items-center gap-4">
              {/* <div className="bg-primary p-4 rounded-full"> */}
              <img
                src="/hand.png"
                className="md:size-12 size-10"
                alt="Contact Icon"
              />
              {/* </div> */}
              <div className="flex-col flex gap-2">
                <h2>Contact us via Email or Whatsapp</h2>
                <p className="text-gray-500">
                  Reach out to start your journey.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* <div className="bg-primary p-4 rounded-full"> */}
              <img
                src="/cal.png"
                className="md:size-12 size-10"
                alt="Calendar Icon"
              />
              {/* </div> */}
              <div className="flex-col flex gap-2">
                <h2>Pick a Time for Free Trial</h2>
                <p className="text-gray-500">
                  Choose a convenient time for you.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* <div className="bg-primary p-4 w-[72px] h-[72px] rounded-full"> */}
              <img
                src="/tick.png"
                className="md:size-12 size-10"
                alt="Contact Icon"
              />
              {/* </div> */}
              <div className="flex-col flex gap-2">
                <h2>Embark On this Holy Journey with Your First Class</h2>
                <p className="text-gray-500">
                  Begin learning with expert guidance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
