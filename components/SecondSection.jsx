import { secondSectionData } from "@/constants";
import React from "react";
import FeatureCard from "./FeatureCard";

export default function SecondSection() {
  return (
    <div className="py-28">
      {/* Grid Container */}
      <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
        {secondSectionData.map((item, idx) => (
          <FeatureCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}
