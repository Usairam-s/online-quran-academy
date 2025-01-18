"use client";
import { secondSectionData } from "@/constants";
import React from "react";
import FeatureCard from "./FeatureCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SecondSection() {
  const { ref, inView } = useInView({ threshold: 0.3 }); // Trigger when 20% of the section is visible
  const animationControls = useAnimation();
  const [hasAnimated, setHasAnimated] = React.useState(false); // Track if animation has already run

  React.useEffect(() => {
    if (inView && !hasAnimated) {
      animationControls.start("visible"); // Start animation when in view for the first time
      setHasAnimated(true); // Mark animation as completed
    }
  }, [inView, hasAnimated, animationControls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Cards start faded out and slightly below
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.2 },
    }, // Fade in and move up smoothly
  };

  return (
    <div className="py-28" ref={ref}>
      {/* Grid Container */}
      <motion.div
        className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center"
        variants={cardVariants}
        initial="hidden"
        animate={animationControls}
      >
        {secondSectionData.map((item, idx) => (
          <motion.div key={idx} variants={cardVariants}>
            <FeatureCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
