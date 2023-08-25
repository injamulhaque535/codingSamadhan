import React from "react";
import AboutSection from "../components/about/AboutSection";
import Hero from "../components/hero/Hero";

const About = () => {
  return (
    <>
      <Hero
        heroText1="Welcome to Coding Samadhan"
        heroText2="We will turn your imagination into code"
        heroText3="We develop full stack website using most popular modern reliable web
            technology to build your website like NodeJS, ExpressJS, ReactJS,
            NextJS, MongoDB, etc."
      />
      <AboutSection />
    </>
  );
};

export default About;
