"use client"

import Hero from "@/components/sections/hero-section";
import LandingPage from "../components/sections/features-showcase";
import TechStacks from "../components/sections/tech-stacks";
import Testimonials from "../components/sections/testimonials";
import Vision from "../components/sections/our-vision";
import { useRef } from "react";

export default async function Index() {
  const visionSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Hero learnMoreRef={visionSectionRef} />
      <div ref={visionSectionRef}>
        <Vision />
      </div>
      <LandingPage />
      <Testimonials />
      <TechStacks />
    </div>
  );
}
