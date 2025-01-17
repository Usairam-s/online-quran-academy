import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { NavLinks } from "@/constants";
import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="md:hidden block">
      <Sheet>
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
              <Link
                key={idx} // Key is correctly applied to the Link element
                className="text-lg text-muted-foreground font-semibold p-1 hover:bg-primary hover:text-white rounded-md transition-all duration-300"
                href={item.href}
              >
                {item.name}
                <hr />
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
