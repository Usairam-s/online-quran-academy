import React from "react";

export default function FeatureCard({ item }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="p-4 w-fit bg-primary rounded-full">
        <img
          className="w-10 h-10 invert object-cover"
          src={item.image}
          alt=""
        />
      </div>
      <h2 className="text-2xl font-semibold">{item.title}</h2>
      <p className="text-muted-foreground text-center">{item.description}</p>
    </div>
  );
}
