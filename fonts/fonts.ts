import { Roboto_Mono } from "next/font/google";
import { Rubik_Bubbles } from "next/font/google";
import { Rubik_Mono_One } from "next/font/google";
import { Rubik } from "next/font/google";

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const rubikBubbles = Rubik_Bubbles({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik-bubbles",
}); 

export const rubikMonoOne = Rubik_Mono_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik-mono-one",
});

export const rubik = Rubik({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-rubik",
});