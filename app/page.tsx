"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[20] max-w-[750px]">
        <h1 className="text-[50px] text-white font-semibold mt-10"> {/* Added margin-top */}
  Welcome to my Portfolio -
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
    {" "} Saurabh Pakhale
  </span>
</h1>

          <p className="text-blue-200 hidden md:block bg-black/60">
            Hey! It&apos;s Saurabh Pakhale and I&apos;am passionate & driven
            MERN Stack Developer with experience building dynamic, responsive
            web applications. I specialize in using HTML, CSS, Javascript,
            Node.js, React JS, Express JS, Redux Toolkit, Axios, Rest
            API&apos;s, MongoDB, SQL. Currently, I am focusing on Advanced
            Concepts of Javascript & thier Libraries to optimize the production.
            My background in working on live projects during my internship has
            honed my skills in frontend development with React.js, as well as
            backend development using Node.js and Express. I Have Completed my
            post graduation in MCA with 8.58 CGPA. I am a responsible web
            developer like to collaborate with thier team and complete projects in given time
            period. Feel free to contact me below.
          </p>

          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]">
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
          Contact me
        </Link>
      </div>

      {/* Moved horse and cliff back with a lower z-index */}
      <div className="absolute bottom-0 right-0 z-[8]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
