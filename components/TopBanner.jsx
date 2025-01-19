import React from "react";
import { Button } from "./ui/button";
import { MailCheck } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="  bg-primary">
      <div className="max-w-6xl md:h-12 h-10 mx-auto px-4 flex gap-6 justify-end items-center">
        <Button className="h-full rounded-none text-sm md:text-lg bg-black hover:bg-slate-800 text-white">
          <a href="https://wa.me/923280214877" target="_blank">
            Whatsapp us
          </a>
        </Button>
        <Button className="h-full rounded-none text-sm md:text-lg hover:bg-slate-800  bg-black text-white">
          <a
            className="flex items-center"
            href="mailto:quranpaktutor02@gmail.com"
            target="_blank"
          >
            Email us
          </a>
        </Button>
      </div>
    </div>
  );
}

//
