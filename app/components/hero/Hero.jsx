import "./styles.scss";
const Hero = ({ heroText1, heroText2, heroText3 }) => {
  return (
    <section className="heroSection">
      <div className="heroSectionOverlay z-10"></div>
      <div className="heroWrapper container m-auto py-52 z-20 relative">
        <div className="heroContent">
          <h3 className="text-2xl text-white font-bold uppercase mb-3 tracking-wider	">
            {heroText1}
          </h3>
          <h2 className="text-6xl font-extrabold capitalize text-white mb-8 tracking-wide leading-tight">
            {heroText2}
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
