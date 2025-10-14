"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Room3d } from "./3dRoom/Room3d";
import getCoords from "@/utils/getCoords";
import useWeatherData from "@/hooks/useWeatherData";

type Coords = { lat: number; lon: number } | null;

const Hero = () => {
  const [coords, setCoords] = useState<Coords>(null);

  useEffect(() => {
    getCoords().then((c) => setCoords(c ?? null));
  }, []);

  const { data: weather, loading: loadingWeather, error } = useWeatherData(coords);

  return (
    <section className={`flex relative items-center justify-center h-screen bg-size-[auto_600px] md:bg-size-[auto_1100px] bg-top-left md:bg-center bg-[url('/images/cloudBG.webp')]`}>
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading...</div>}>
        <Room3d />
      </Suspense>

      <div className="absolute top-4 left-4 z-50">
        {coords ? (
          <div className="text-white">
            Coords: {coords.lat.toFixed(4)}, {coords.lon.toFixed(4)}
          </div>
        ) : (
          <div className="text-white">No coords</div>
        )}

        <div className="text-white">
          {loadingWeather
            ? "Loading weather..."
            : error
            ? "Error loading weather"
            : weather
            ? `Temp: ${weather?.current?.temp_c ?? "n/a"}°C`
            : "No weather"}
        </div>
      </div>

      <div className="absolute bg-white-gradient-inverse bottom-0 w-screen h-8" />
    </section>
  );
};

export default Hero;