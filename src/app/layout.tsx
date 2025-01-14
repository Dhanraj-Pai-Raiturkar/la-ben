import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Resort - A resort in Goa India",
  description: "website for The Resort a budget resort in Goa India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${roboto.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
