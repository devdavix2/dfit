// Hero.js

import React from 'react';
import { motion } from 'framer-motion';


import img from '../assets/img/hero.png';

const Home = () => {
  return (
    <div className="text-gray-900 min-h-screen sm:pt-10 flex items-center lg:mx-20">
      <div className="container mx-5  sm:mx-2  flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="md:w-1/2 lg:mx-10 mt-4  ">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
                  >
                      Embrace Change, Ignite Life's <span className="text-red-900">Transformational</span> Spark
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl mb-8"
                  >
   Embark on a transformative fitness journey with Dfits, your dedicated partner in achieving a healthier and stronger you. 
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white px-4 py-2 rounded-md font-bold bg-red-900 shadow-lg shadow-gray-400"
          >
            Get Started
          </motion.button>

          {/* Stats Card */}
                  <div className="flex flex-row justify-between mt-12">
                      <div>
                         
                          <StatsCard  
                           label={"250+"}
                          value={"Satisfied Cleints"}
                          />
                      </div>
                      <div>
                         
                      <StatsCard
                          label={"35+"}
                         value={"Expert Trainers"}
                         />
                      </div>
                      <div>
                      <StatsCard 
                          label={"15+"}
                         value={"Years Experinces"}
                         />
                   </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 ">
          <motion.img
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 5, delay: 0.5 }}
            src={img}
            alt="Fitness Image"
            className="w-400 h-600 mb-10 "
          />
        </div>
      </div>
    </div>
  );
};


const StatsCard = ({ icon, label, value }) => (
    <div className=" rounded-md flex-1 mr-6 text-center">
      <div className="flex flex-col justify-center items-center">

        <div className="flex flex-col items-center mt-4">
          <p className="text-3xl font-bold text-black">{label}</p>
          <p className="text-sm text-gray-600 mt-4">{value}</p>
        </div>
      </div>
    </div>
  );
  
export default Home;
