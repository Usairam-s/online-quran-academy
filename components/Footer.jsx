"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Instagram } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "react-toastify";

const key = process.env.NEXT_PUBLIC_ACCESS_KEY;

export default function Footer() {
  const [result, setResult] = useState("");
  const [disable, setDisable] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setDisable(true);
    const formData = new FormData(event.target);

    if (!key) {
      toast.error("Access key is missing");
      return;
    }

    formData.append("access_key", key);

    // Use toast.promise to handle promise states
    toast
      .promise(
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        }).then(async (response) => {
          const data = await response.json();
          setDisable(false);
          if (!data.success) {
            throw new Error(data.message);
          }
          return data;
        }),
        {
          pending: "Sending your message...",
          success: "Message sent successfully! 🎉",
          error: "Error submitting the form. Please try again. 🚨",
        }
      )
      .then(() => {
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };
  return (
    <div
      className="bg-gradient-to-r from-slate-900 to-slate-700  w-full text-white "
      id="contact"
    >
      {/* muhammaduseram@gmail.com */}
      <p className="text-center pt-10 pb-4 md:text-5xl text-4xl font-semibold ">
        Contact Us
      </p>
      <p className="text-center text-muted-foreground">
        You can send message to our email or whatsapp us
      </p>
      <div className="max-w-6xl  p-8 mx-auto flex md:justify-between md:flex-row flex-col md:gap-40 gap-6">
        <form onSubmit={onSubmit} className=" w-full flex flex-col gap-4">
          <Input placeholder="Name" name="Name" type="text" required />
          <Input placeholder="Email" type="email" required name="Email" />
          <Textarea required placeholder="Message" name="Message" />
          <Button
            disabled={disable}
            className="w-fit bg-white dark:bg-black text-black dark:text-white hover:bg-inherit hover:bg-white"
          >
            Send Message
          </Button>
        </form>

        <div
          className=" w-full flex flex-col gap-4
        "
        >
          <h2 className="md:text-3xl text-2xl font-semibold  uppercase">
            Whatsapp us
          </h2>
          <Button className="w-fit  rounded-none text-lg bg-black hover:bg-slate-800 text-white">
            <a
              className="flex items-center gap-2"
              href="https://wa.me/923280214877"
              target="_blank"
            >
              <img src="/wap.png" alt="icons" className="size-8" /> Click here
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
