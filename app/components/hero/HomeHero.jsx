import "./styles.scss";

const HomeHero = () => {
  return (
    <section className="HomeHomeHeroSection">
      <div className="HomeHeroWrapper relative ">
        <div className="HomeHeroVideoWrapper relative overflow-hidden  ">
          <video
            autoPlay
            muted
            loop
            src="/videos/hero.mp4"
            className="w-full"
          />
        </div>
        <div className=" HomeHeroContentWrapper w-full h-full absolute top-0   ">
          <div className="HomeHeroContents container m-auto flex flex-col items-start h-full justify-center ">
            <div className="HomeHeroLeftContent w-1/2">
              <h3 className="text-2xl text-white font-bold uppercase mb-3 tracking-wider	">
                Welcome to Coding Samadhan
              </h3>
              <h2 className="text-6xl font-extrabold capitalize text-white mb-8 tracking-wide leading-tight">
                We will turn your{" "}
                <span className="text-secondary p-0">Imagination</span> into
                <span className="text-secondary p-0"> Code</span>.
              </h2>
              <p className="text-white mb-8 text-lg">
                We develop full stack website using most popular modern reliable
                web technology to build your website like NodeJS, ExpressJS,
                ReactJS, NextJS, MongoDB, etc.
              </p>
              <button className="button buttonGreen !rounded-none !py-2">
                <span className="buttonText !text-lg !font-semibold ">
                  Get A Quote
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
