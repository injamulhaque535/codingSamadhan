import React from "react";
import AboutSection from "../components/about/AboutSection";
import Hero from "../components/hero/Hero";

const About = () => {
  return (
    <>
      <Hero
        heroText1="About Us"
        heroText3="Unleash innovation with our coding services. From concept to code, we craft seamless digital solutions, harnessing the power of technology to bring your ideas to life."
      />
      <AboutSection />
    </>
  );
};

export default About;
