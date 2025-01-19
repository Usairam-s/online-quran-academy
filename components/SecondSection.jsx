"use client";
import { secondSectionData } from "@/constants";
import React from "react";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";

export default function SecondSection() {
  return (
    <div className="py-28">
      {/* Grid Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
          {secondSectionData.map((item, idx) => (
            <FeatureCard key={idx} item={item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
