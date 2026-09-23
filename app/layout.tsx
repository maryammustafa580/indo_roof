import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Indo Roof Cleaning | Professional Roof Restoration",
  description: "Expert roof cleaning, pressure washing, and restoration services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-gray-900 selection:bg-[#c2a382] selection:text-black">
        <Navbar/>
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}