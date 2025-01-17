import { NavLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <>
      <div className="py-6 border-b shadow-md">
        <div className="flex items-center w-full justify-between max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-20">
            <h2 className="md:text-2xl font-semibold text-xl">
              Quran Academy{" "}
            </h2>
            <div className="md:flex hidden items-center gap-12">
              {NavLinks.map((item, idx) => (
                <Link
                  key={idx}
                  className="text-lg text-muted-foreground font-semibold p-1 hover:bg-primary hover:text-white rounded-md transition-all duration-300"
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button>Contact Us</Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </>
  );
}
