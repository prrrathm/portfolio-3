import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    <div className="relative h-screen grid grid-flow-col grid-cols-2 justify-stretch items-center overflow-hidden">
      <div className="relative flex justify-center items-end h-full">
        <Image
          src="/who.webp"
          alt="Vercel Logo"
          width={600}
          height={500}
          className="inline-block rounded md:shrink-0"
        />
      </div>
      <div className="pl-40 red max-w-20pc overflow-visible z-[2]">
        <h1 className="font-black text-6xl text-white">But who am I?</h1>
        <p>Glad you asked.</p>
      </div>
    </div>
  );
};
