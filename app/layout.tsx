import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { Roboto_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Pablo Planells",
  description: "Personal website of Pablo Planells",
};

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${robotoMono.variable}`}
      >
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
