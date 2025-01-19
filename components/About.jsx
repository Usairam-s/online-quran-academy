"use client";
import React from "react";
import { Button } from "./ui/button";
import { servicesData } from "@/constants";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <div
      className="min-h-[80vh] flex items-center justify-center border-t border-b  bg-gray-100/45"
      id="about"
    >
      <div className="max-w-6xl mx-auto md:flex-row flex-col gap-8 flex items-center justify-between py-16 px-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="md:w-1/2 w-full flex flex-col justify-between h-full items-stretch gap-6"
        >
          <h2 className="border-l-4 pl-2 border-primary md:text-xl font-semibold">
            ONLINE QURAN ACADEMY
          </h2>
          <h1 className="lg:text-5xl font-semibold md:text-4xl text-3xl">
            About our teaching experience
          </h1>
          <p className="text-gray-400">
            For over 5 years, we’ve been empowering students worldwide with
            high-quality online Quran lessons. Our experienced instructors make
            learning easy and accessible, guiding you at your own pace, wherever
            you are.
          </p>
          <p className="text-gray-400">
            Whether you're starting your journey or deepening your knowledge,
            our personalized lessons offer:
          </p>
          <ul className="text-gray-400 list-disc pl-6">
            <li>Clear lessons for all levels of learners.</li>
            <li>Expert guidance on Tajweed and recitation.</li>
            <li>Flexible, anytime, anywhere classes.</li>
            <li>Interactive and engaging learning sessions.</li>
            <li>Personalized one-on-one attention.</li>
          </ul>
          <p className="text-gray-400">
            Join us and build a stronger connection with the Quran. Let’s embark
            on this transformative journey together!
          </p>

          <Button className="px-10 w-fit font-semibold">
            {" "}
            <Link href={"#contact"}>Contact us</Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="md:w-1/2 h-full w-full"
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
