import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = (id) => {
    console.log(`Navigate to: ${id}`);
    setIsOpen(false);
    scroll.scrollTo(id, {
      smooth: true,
      offset: -70,
      duration: 500,
    });
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className=" text-gray-800 p-4 px-5 lg:px-20 lg:mx-5 lg:mt-4   relative">
      <div className="container mx-auto" ref={containerRef}>
        <div className="flex items-center justify-between">
          <div className="  text-gray-800 font-bold text-2xl ">
            <h1 className=" transition-all cursor-pointer"  onClick={() => navigate("home")}>DFits</h1>
          </div>

          <div className="md:hidden">
            <button
              className="  text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          <div className="hidden md:flex space-x-2">
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
              <button
                className="hover:text-red-900  transition-all cursor-pointer font-medium text-gray-800 py-2 px-4"
                onClick={() => navigate("home")}
              >
                Home
              </button>
            </Link>
          
            <Link to="services" spy={true} smooth={true} offset={-70} duration={500}>
              <button
               className="hover:text-red-900  transition-all cursor-pointer font-medium text-gray-800 py-2 px-4"
                onClick={() => navigate("services")}
              >
                Services
              </button>
            </Link>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
              <button
              className="hover:text-red-900  transition-all cursor-pointer font-medium text-gray-800 py-2 px-4"
                onClick={() => navigate("about")}
              >
                About 
              </button>
            </Link>
           
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <button
                className="hover:text-red-900  transition-all cursor-pointer font-medium text-gray-800 py-2 px-4"
                onClick={() => navigate("contact")}
              >
                Contact
              </button>
            </Link>
            <Link to="register" spy={true} smooth={true} offset={-70} duration={500}>
              <button
                className="hover:text-red-900  transition-all cursor-pointer font-medium text-gray-800 py-2 px-4"
                onClick={() => navigate("register")}
              >
                Register
              </button>
            </Link>
            <Link to="login" spy={true} smooth={true} offset={-70} duration={500}>
      <button
        className="hover:text-white hover:bg-red-500 transition-all cursor-pointer font-medium py-2 px-4 bg-red-700 text-white rounded-md "
        
      >
        Login
      </button>
    </Link>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="menu"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                transition={{ duration: 0.3 }}
                className="md:hidden fixed top-0 right-0 h-full bg-red-900 p-4 w-full  flex flex-col"
              >
                <button
                  className="text-white self-end focus:outline-none"
                  onClick={toggleMenu}
                >
                  <FiX />
                </button>

                <div className="  text-white font-bold text-2xl  py-10  px-10 mx-20 ">
            <h1 className=" transition-all cursor-pointer"  onClick={() => navigate("home")}>DFits</h1>
          </div> 
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <button
                    className="hover:text-brightColor transition-all cursor- font-bold text-md text-white mt-5 py-5  px-10 mx-20"
                    onClick={() => navigate("home")}
                  >
                    Home
                  </button>
                </Link>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <button
                    className="hover:text-brightColor transition-all cursor-pointer font-bold text-md text-white py-5 px-10 mx-20"
                    onClick={() => navigate("about")}
                  >
                    About Us
                  </button>
                </Link>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <button
                    className="hover:text-brightColor transition-all cursor-pointer font-bold text-md text-white py-5 px-10 mx-20"
                    onClick={() => navigate("services")}
                  >
                    Services
                  </button>
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <button
                    className="hover:text-brightColor transition-all cursor-pointer font-bold text-md text-white py-5 px-10 mx-20"
                    onClick={() => navigate("contact")}
                  >
                    Contact
                  </button>
                </Link>
                <Link to="register" spy={true} smooth={true} offset={-70} duration={500}>
              <button
                className=" transition-all cursor-pointer   font-bold text-md text-white py-5 px-10 mx-20"
                onClick={() => navigate("register")}
              >
                Register
              </button>
            </Link>
            <Link to="login" spy={true} smooth={true} offset={-70} duration={500}>
      <button
        className=" transition-all cursor-pointer  m-2 p-2  px-10 mx-20  font-bold text-md bg-red-700 text-white rounded-md"
        
      >
        Login
      </button>
    </Link>
                <div className=" py-10 px-10 mx-10">
          <h5 className="text-lg font-semibold mb-2 mx-2  uppercase text-white">LETS Connect</h5>
          <div className="flex mx-6 mt-4 gap-4">
            <a href="#" className="text-white"><FaFacebook size={24} /></a>
            <a href="#" className="text-white"><FaTwitter size={24} /></a>
            <a href="#" className="text-white"><FaInstagram size={24} /></a>
          </div>
        </div>
              </motion.div>
            )}
          </AnimatePresence>

      


          {/* Scroll to Top button */}
          <button
            className="fixed bottom-6 right-28 bg-red-900 text-white p-2 py-3 px-4  rounded-full shadow-md shadow-red-400"
            onClick={scrollToTop}
          >
            ^
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
