import React from "react";

const WhyCsCard = (whycsitem) => {
  const { whyCsIcon, whyCsName, whyCsDesc } = whycsitem;
  return (
    <div className="whyCsCardWrapper border-b border-border relative">
      <div className="cardContent p-10 flex justify-center">
        <div className="cardIcon text-center w-fit mb-auto p-5  rounded-full text-white bg-primary text-5xl">
          {whyCsIcon}
        </div>
        <div className="cardData ml-10">
          <h2 className="text-2xl font-bold text-left  text-black">
            {whyCsName}
          </h2>
          <p className="text-left text-lg mb-10">{whyCsDesc}</p>
          {/* <div className="cardButton !absolute bottom-6 w-full text-left">
            <button className="button buttonPrimary !rounded-none text-center text-lg ">
              <span className="buttonText">Learn More</span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WhyCsCard;
