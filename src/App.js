import React from "react";

import "./index.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SafetyIntelligence from "./components/SafetyIntelligence";
import DownloadSection from "./components/DownloadSection";
import TestimonialCard from "./components/TestimonialCard";
import CTASection from "./components/CTASection";
import FooterSection from "./components/FooterSection";
import PromoVideoSection from "./components/PromoVideoSection";

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <HeroSection />
        <SafetyIntelligence />
        <DownloadSection />
        <PromoVideoSection />
        <TestimonialCard />
        <CTASection />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
