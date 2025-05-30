"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center pt-[100px]" // Added pt-[100px] to push content down
    >
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[50px]">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "} &{" "}
            </span>
            Technologies
          </h1>
        
          <p className="text-pink-400 text-[20px]">
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">WEB TECHNOLOGIES :</strong> HTML, CSS, JavaScript, Bootstrap, React JS, Express JS, Node.js, Redux-Toolkit, Rest API&apos;s, Mongoose & Other Javascript Libraries.
          </p>
          <p className="text-purple-400 text-[20px]">
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">LANGUAGES:</strong> C, C++, Java, PHP
          </p>
          <p className="text-red-400 text-[20px]">
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">DATABASE :</strong> MongoDB, MySQL, PhpMyAdmin{" "}
          </p>
          <p className="text-yellow-400 text-[20px]">
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500"> IDE :</strong>  Visual Studio, Replit, Android Studio {" "}
          </p>
        </div>

        {/* First Swiper */}
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Second Swiper (Reverse Direction) */}
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;
