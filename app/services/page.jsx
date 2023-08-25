import React from "react";
import ServicesSection from "../components/services/ServicesSection";
import WhyCS from "../components/whySection/WhyCS";
import Hero from "../components/hero/Hero";

const Services = () => {
  return (
    <>
      <Hero
        heroText1="Our Services"
        heroText3="Elevate your digital aspirations with our coding services. From web and app development to software solutions, we turn lines of code into innovative realities."
      />
      <ServicesSection />
      <WhyCS />
    </>
  );
};

export default Services;
