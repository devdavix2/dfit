import React from 'react';
import img from '../assets/img/about.jpg'; 

const About = () => {
  return (
    <section className="about-us-container  bg-darkBackground   lg:m-20 rounded-md">
      
      <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <img src={img}  width={400} height={300} alt="About Our Travel Agency" className="w-full h-auto rounded-lg p-8" />
        </div>

        <div className="flex flex-col p-2 mb-10  text-gray-900">
        <h2 className="text-lg lg:text-xl font-bold  mx-6 p-2 lg:pt-8 text-start uppercase text-red-900"> ABOUT</h2>
        <h2 className="text-2xl lg:text-3xl font-bold  mx-4 mb-4 p-2 lg:pt-8 text-start uppercase text-gray-900"> Welcome to Dfits</h2>
          <p className=" mx-6 text-xl lg:text-lg font-normal">
            At DFits, we are more than just a fitness agency , we are your dedicated partner on the journey to a healthier and fitter lifestyle.
            Our mission is to empower individuals to achieve their fitness goals, whether you're a beginner taking your first steps
            into the world of fitness or an experienced enthusiast looking for a new challenge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
