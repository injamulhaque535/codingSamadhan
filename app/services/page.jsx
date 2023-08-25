import React from "react";
import ServicesSection from "../components/services/ServicesSection";
import WhyCS from "../components/whySection/WhyCS";
import Hero from "../components/hero/Hero";

const Services = () => {
  return (
    <>
      <Hero
        heroText1="Welcome to Coding Samadhan"
        heroText2="We will turn your imagination into code"
        heroText3="We develop full stack website using most popular modern reliable web
            technology to build your website like NodeJS, ExpressJS, ReactJS,
            NextJS, MongoDB, etc."
      />
      <ServicesSection />
      <WhyCS />
    </>
  );
};

export default Services;
