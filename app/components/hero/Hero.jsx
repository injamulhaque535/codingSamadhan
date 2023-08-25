"use client";
import { usePathname } from "next/navigation";
import "./styles.scss";

const Hero = ({ heroText1, heroText3 }) => {
  const pathname = usePathname();

  return (
    <section
      className={`heroSection 
      ${pathname == "/services" ? "bg-service-bg-img" : ""}
      ${pathname == "/portfolio" ? "bg-portfolio-bg-img" : ""}
      ${pathname == "/blogs" ? "bg-blogs-bg-img" : ""} 
      ${pathname == "/about" ? "bg-about-bg-img" : ""}
      ${pathname == "/support" ? "bg-support-bg-img" : ""}`}
    >
      <div className="heroSectionOverlay z-10"></div>
      <div className="heroWrapper container m-auto py-40 z-20 relative">
        <div className="heroContent text-center w-1/2 m-auto">
          <h2 className="text-6xl font-extrabold capitalize text-white mb-8 tracking-wide leading-tight">
            {heroText1}
          </h2>
          <p className="text-white mb-8 text-lg">{heroText3}</p>
          <button className="button buttonGreen !rounded-none !py-2">
            <span className="buttonText !text-lg !font-semibold ">
              Get A Quote
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
