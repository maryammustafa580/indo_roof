"use client";

import HeroSection from "./components/hero";
import ServicesPage from "./components/service";
import ProjectShowcase from "./components/ProjectShowcase";
import ContactSection from "./components/contact";
import GetQuote from "./components/GetQuoteForm";
import Textscroll from "./components/textscroll";
import CleanImage from "./components/clean";

export default function home() {

  return (
    <>
      <HeroSection/>
      <ContactSection/>
      <ServicesPage/>
      <ProjectShowcase/>
      <Textscroll/>
      <CleanImage/>
      <GetQuote/>
    </>
  );
}