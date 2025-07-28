import { Roboto_Mono } from "next/font/google";
import { Rubik_Bubbles } from "next/font/google";

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const rubikBubbles = Rubik_Bubbles({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik-bubbles",
}); 