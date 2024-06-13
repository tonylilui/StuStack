"use client";
import NewsletterForm from "@/components/NewsletterForm";
import Socials from "@/components/Socials";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="bg-[#03040B] flex flex-col items-center justify-center p-10 min-h-screen">
      <div className="space-y-1">
        <h1 className="z-10 text-4xl font-bold text-center text-transparent duration-1000 bg-white cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-purple-300 to-purple-800 animate-fade-in-3">
          StuStack
        </h1>
        <TypeAnimation
          className="text-white"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "The Ultimate Student Newsletter.",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
      <NewsletterForm />
      <Socials />
    </main>
  );
}
