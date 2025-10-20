"use client";

import React, { Suspense } from "react";
import { Room3d } from "./3dRoom/Room3d";

const Hero = () => {
  return (
    <section className={`flex relative items-center justify-center h-screen bg-size-[auto_600px] md:bg-size-[auto_1100px] bg-top-left md:bg-center bg-[url('/images/cloudBG.webp')]`}>
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading...</div>}>
        <Room3d />
      </Suspense>
      <div className="absolute bg-white-gradient-inverse bottom-0 w-screen h-8" />
    </section>
  );
};

export default Hero;