const ServiceCard = (service) => {
  const { serviceIcon, serviceName, serviceDesc } = service;

  return (
    <div className="serviceCardWrapper shadow-2xl relative flex justify-center">
      <div className="cardContent p-10 ">
        <div className="cardIcon text-center w-fit m-auto p-5  rounded-full text-white bg-primary text-5xl">
          {serviceIcon}
        </div>
        <h2 className="text-2xl font-bold text-center my-4 text-black">
          {serviceName}
        </h2>
        <p className="text-center text-lg mb-10">{serviceDesc}</p>
        <div className="cardButton !absolute bottom-6 left-0 w-full text-center">
          <button className="button buttonPrimary !rounded-none text-center text-lg ">
            <span className="buttonText">Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
