"use client";
import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { NavLinks } from "@/constants";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 0);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    window.location.hash = href.slice(1);
  };

  return (
    <div className="md:hidden block">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="pt-24">
          <SheetHeader>
            <SheetTitle className="text-2xl">Quran Academy</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col items-center justify-center gap-4 mt-6">
            {NavLinks.map((item, idx) => (
              <a
                key={idx}
                className="text-lg text-muted-foreground font-semibold p-1 hover:bg-primary hover:text-white rounded-md transition-all duration-300 cursor-pointer"
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
