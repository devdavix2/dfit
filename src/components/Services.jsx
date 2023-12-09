import React from "react";
import cardioWorkoutsImage from "../assets/img/service1.jpg"; 
import strengthTrainingImage from "../assets/img/service3.jpg"; 
import personalTrainingImage from "../assets/img/service2.jpg"; 
const Services = () => {
  const servicesData = [
    {
      title: "Cardio Workouts",
      description: "Improve your cardiovascular health with our specialized cardio workouts.",
      image: cardioWorkoutsImage,
    },
    {
      title: "Strength Training",
      description: "Build strength and muscle with our tailored strength training programs.",
      image: strengthTrainingImage,
    },
    {
      title: "Personal Training",
      description: "Get personalized training sessions with our certified personal trainers.",
      image: personalTrainingImage,
    },
  ];

  return (
    <div className="font-semibold text-4xl align-center text-center ">
    <h2 className="text-2xl lg:text-3xl font-bold  mx-6 mb-4 p-2 lg:pt-8 text-center uppercase text-gray-900"> Explore Our Services</h2>

      <div id="services" className="flex flex-col p-4 lg:flex-row lg:px-20 lg:mb-50 lg:mx-10 lg:mt-4 text-gray-900 relative">
        {servicesData.map((service, index) => (
          <div key={index} className="relative mb-2 m-5 lg:mb-2 pb-2 lg:pb-2 lg:w-1/3">
            <img
              src={service.image}
              alt={service.title}
              loading="lazy" 
              className="rounded-2xl mb-4 lg:mb-0 lg:mr-4 object-cover"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="lg:relative bottom-10 m-2 p-4 bg-white shadow-lg shadow-gray-300 rounded-xl">
              <h3 className="text-gray-900 text-lg font-semibold uppercase mb-2 lg:mb-4">{service.title}</h3>
              <p className="text-gray-900 text-sm font-normal mb-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
