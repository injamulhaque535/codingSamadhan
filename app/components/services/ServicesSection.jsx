"use client";

import ServiceCard from "./ServiceCard";
import { MdPhonelink } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { BsFillShieldLockFill, BsDatabaseFillGear } from "react-icons/bs";
import { RiPagesFill } from "react-icons/ri";
import { SiAmazonapigateway } from "react-icons/si";

const ServicesSection = () => {
  const ourServices = [
    {
      serviceIcon: <MdPhonelink />,
      serviceName: "MERN Stack Responsive Design",
      serviceDesc:
        "Ensuring that websites are optimized for various devices and screen sizes, providing a seamless user experience on desktops, tablets, and smartphones.",
    },
    {
      serviceIcon: <FaLaptopCode />,
      serviceName: "MERN Stack Back-End Development",
      serviceDesc:
        "Building the server-side components and databases that power web applications using Modern Web Technology like NodeJS, ExpressJS, NextJS, MongoDB",
    },
    {
      serviceIcon: <SiAmazonapigateway />,
      serviceName: "API Development and Integration",
      serviceDesc:
        "Creating Application Programming Interfaces (APIs) that allow different software applications to communicate and share data, enabling integrations with third-party services. ",
    },
    {
      serviceIcon: <RiPagesFill />,
      serviceName: "Custom Full-Sack Web Applications",
      serviceDesc:
        "We can build e-commerce website as well as business website, blogging website, portfolio website, Membership and Subscription Website, LMS website, etc.",
    },
    {
      serviceIcon: <BsFillShieldLockFill />,
      serviceName: "Web Security and Optimization Services",
      serviceDesc:
        "Implementing security measures, SSL certificates, and best practices to safeguard websites and user data from threats.",
    },
    {
      serviceIcon: <BsDatabaseFillGear />,
      serviceName: "Website Maintenance and Support",
      serviceDesc:
        "Providing ongoing maintenance, updates, and technical support to ensure websites remain secure and up-to-date.",
    },
  ];

  return (
    <section className="serviceSection container m-auto my-20">
      <div className="serviceContents">
        <h2 className="mb-20 text-center text-secondary text-5xl capitalize font-bold">
          Services we provide
        </h2>
        <div className="serviceCardWrapper grid grid-cols-3 gap-10">
          {ourServices?.map((service, index) => {
            return (
              <>
                <ServiceCard key={index} {...service} />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
