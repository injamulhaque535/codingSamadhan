import "./styles.scss";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="heroWrapper relative ">
        <div className="heroVideoWrapper relative overflow-hidden  ">
          <video
            autoPlay
            muted
            loop
            src="/videos/hero.mp4"
            className="w-full"
          />
        </div>
        <div className=" heroContentWrapper w-full h-full absolute top-0   ">
          <div className="heroContents container m-auto flex flex-col items-start h-full justify-center ">
            <div className="heroLeftContent w-1/2">
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
              <button className="primary_button !rounded-none !bg-green !py-2">
                <span className="btn_text !text-lg !font-semibold ">
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

export default HeroSection;
