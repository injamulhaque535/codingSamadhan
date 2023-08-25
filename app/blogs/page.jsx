import React from "react";
import Hero from "../components/hero/Hero";
import BlogsSection from "../components/blogs/BlogsSection";

const Blogs = () => {
  return (
    <>
      <Hero
        heroText1="Blogs"
        heroText3="Dive into our coding-related blogs page, where we unravel the latest trends, tips, and insights. Empowering both novices and experts to excel in the dynamic world of programming."
      />
      <BlogsSection />
    </>
  );
};

export default Blogs;
