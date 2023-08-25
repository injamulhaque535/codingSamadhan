import React from "react";
import WhyCsCard from "./WhyCsCard";
import { FaHeadSideVirus, FaHandshake } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";

const WhyCS = () => {
  const whyCsItems = [
    {
      whyCsIcon: <FaHeadSideVirus />,
      whyCsName: "Expertise and Experience",
      whyCsDesc:
        "Highlight your team's expertise and experience in web development. Showcase successful projects, case studies, and client testimonials that demonstrate your ability to deliver high-quality, functional, and visually appealing websites. Clients are more likely to trust a company with a proven track record of creating effective online solutions.",
    },
    {
      whyCsIcon: <MdOutlineDashboardCustomize />,
      whyCsName: "Custom Solutions",
      whyCsDesc:
        " Emphasize your commitment to providing customized solutions that align with the client's specific needs, branding, and goals. Highlight your capability to tailor designs, features, and functionalities to create a unique and impactful online presence. Clients appreciate web development companies that understand their individual requirements and can deliver a solution that stands out.",
    },
    {
      whyCsIcon: <RiPagesFill />,
      whyCsName: "User-Centric Design",
      whyCsDesc:
        "Showcase your focus on user experience (UX) and user interface (UI) design. Explain how you prioritize creating websites that are intuitive, easy to navigate, and engaging for visitors. A user-friendly website not only enhances customer satisfaction but also contributes to higher conversions and improved online performance.",
    },
    {
      whyCsIcon: <FaHandshake />,
      whyCsName: "Comprehensive Services",
      whyCsDesc:
        "Offer a range of services that go beyond basic web development. Highlight your ability to provide services such as SEO optimization, mobile responsiveness, ongoing maintenance, and digital strategy consulting. Clients often seek web development partners that can offer a holistic approach to their online presence, ensuring a seamless and successful launch and beyond.",
    },
  ];
  return (
    <section className="whyCMSection py-20 mb-20 bg-gray">
      <div className="whyCMContent container m-auto">
        <h2 className="mb-20 text-center text-secondary text-5xl capitalize font-bold">
          Why Coding Samadhan?
        </h2>
        <div className="whyCardWrapper grid grid-cols-1 gap-10">
          {whyCsItems?.map((whycsitem) => {
            return (
              <>
                <WhyCsCard {...whycsitem} />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyCS;
