import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import Navigation from "./Navigation"; // Importing the Navigation component

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20 bg-black/40">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative"></div>
        <h1 className="text-white text-[25px] font-semibold">
          Saurabh{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Pakhale{" "}
          </span>
        </h1>
      </div>
      <Navigation />
      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
          >
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={30}
              height={66}
              className="hover:scale-110 transition-transform duration-200" // Added hover zoom effect on social icons
            />
          </a>
        ))}
      </div>

      <div>
        {/* Add Navigation component here */}
       
      </div>
    </div>
  );
};

export default Navbar;
