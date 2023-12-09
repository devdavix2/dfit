import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white bg-red-900  p-5 lg:m-20 lg:p-20 lg:rounded-md ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Column 1 */}
        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-2 uppercase">Dfit</h5>
          <p>At DFits, we are more than just a fitness agency , we are your dedicated partner on the journey to a healthier and fitter lifestyle.</p>
        
        </div>

        {/* Column 2 */}
        <div className="mb-4">
          <h5 className="text-lg font-semibold mb-2">Connect With Us:</h5>
          <div className="flex space-x-4">
            <a href="#" className="text-white"><FaFacebook size={24} /></a>
            <a href="#" className="text-white"><FaTwitter size={24} /></a>
            <a href="#" className="text-white"><FaInstagram size={24} /></a>
          </div>
        </div>

        {/* Column 3 */}
        <div className="mb-4">
          <h5 className="text-lg font-semibold mb-2">Quick Links:</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Classes</a></li>
            <li><a href="#">Trainers</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="mb-4">
          <h5 className="text-lg font-semibold mb-2">Join Our Community:</h5>
                  <form>
                      
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-2 w-full rounded"
            />
            <button
              type="submit"
              className="bg-white text-red-900 py-2 px-4 mt-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container flex flex-col mx-auto mt-8">
        <div className="flex flex-col  lg:flex-row justify-between">
          <p>&copy; 2023 Dfits Fitness Agency. All rights reserved.</p>
          <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
          <p>Designed by Devdavix</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
