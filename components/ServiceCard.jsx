import React from "react";

export default function ServiceCard({ item }) {
  return (
    <div className="relative text-white  bg-gradient-to-r from-slate-900 to-slate-700 md:p-6 group transition-all duration-300 hover:bg-primary p-4 flex items-center flex-col gap-6 border rounded-md shadow-md overflow-hidden">
      <div className="bg-primary duration-300 group-hover:bg-white p-4 rounded-full w-fit">
        {/* Replace this with your icon */}
        <img className="w-12 h-12" src={item.icon} alt="icon" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg  font-semibold">{item.heading}</h2>
        <p className="text-gray-500 text-center">{item.description}</p>
      </div>
      {/* Background animation div
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-500"></div> */}
    </div>
  );
}
