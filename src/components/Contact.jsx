import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import img from '../assets/img/contact.jpg';

const Contact = () => {
  return (
    <section className="contact-us-container bg-darkBackground lg:m-20 rounded-md">
      <div id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <img src={img} width={400} height={300} alt="Contact Us" className="w-full h-auto rounded-lg p-8" />
        </div>

        <div className="flex flex-col p-2 mb-10 text-gray-900">
          <h2 className="text-lg lg:text-xl font-bold mx-4 mb-2 lg:pt-8 text-start uppercase text-red-900"> CONTACT</h2>
          <p className="mx-4 text-xl lg:text-lg font-normal">
            Have questions or ready to start your fitness journey with DFits? We're here to help! Connect with us through the following contact details.
          </p>

          <div className="flex mx-5 mt-6 flex-col gap-4">
          <div className="flex flex-row items-center">
  <FaMapMarkerAlt size={30} className="mx-4 text-white bg-red-900 p-2 rounded-full" />
  <p className='text-sm'> 123 Devdavix str Dav County </p>
</div>
        
            <div className="flex flex-row  items-center">
              <FaPhone size={30} className=" mx-4 text-white bg-red-900 p-2 rounded-full" /> 
              <p className='text-sm'>123 456 789 </p>
            </div>
          
            <div className="flex flex-row  items-center">
              <FaEnvelope size={30} className="mx-4 text-white bg-red-900 p-2 rounded-full" /> 
              <p className='text-sm'> info@dfit.com </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
