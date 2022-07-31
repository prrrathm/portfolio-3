import React from "react";

export const Landing = () => {
  return (
    <div className="relative h-screen grid grid-flow-col grid-cols-2 justify-stretch items-center bg-[url('/_.jpeg')] bg-cover bg-center  overflow-hidden bg-fixed">
      <div className="bg-black/40 z-[1] h-screen w-screen absolute"></div>
      <div className="pl-40 red max-w-20pc overflow-visible z-[2]">
        <h1 className="font-black text-6xl text-white">Pratham Sharma</h1>
        <br />
        <br />
        <h2>Full Stack Developer</h2>
      </div>
      <div className="relative flex justify-center items-end h-full"></div>
    </div>
  );
};
