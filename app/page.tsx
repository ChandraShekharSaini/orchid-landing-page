import React from "react";
import HeroSection from "@/components/hero-section";
import Features from "@/components/features-2";
import ContentSection from "@/components/content-1";
import CallToAction from "@/components/call-to-action";
import Testimonial from "@/components/testimonials";
import FooterSection from "@/components/footer";
const Page = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <ContentSection />
      <CallToAction />
      <Testimonial />
      <FooterSection />
    </>
  );
};

export default Page;
