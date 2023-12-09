import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import img3 from "../assets/img/3.jpg";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
const Testimonial = () => {
  const testimonials = [
    {
      text: "The fitness programs at this agency transformed my life! The trainers are highly motivated, and the personalized workouts are challenging yet enjoyable. I've achieved amazing results!",
      author: "- John Doe",
    },
    {
      text: "Joining this fitness agency was the best decision I ever made. The coaches are incredibly knowledgeable, and the sense of community among members is inspiring. I feel stronger and healthier than ever!",
      author: "- Jane Smith",
    },
    {
      text: "I appreciate the variety in the workout routines. Every session is unique and keeps me motivated. The trainers here genuinely care about your progress, creating a positive and encouraging environment.",
      author: "- Alex Johnson",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isThirdTestimonialActive, setThirdTestimonialActive] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();

      if (currentSlide === 2) {
        setThirdTestimonialActive(true);
      } else {
        setThirdTestimonialActive(false);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div>
      <section className="about-us-container bg-red-100 lg:m-20 lg:pt-10 rounded-md relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative">
          <div className="flex flex-col p-2 mb-10 text-gray-900">
            <h2 className="text-lg lg:text-xl font-bold mx-6 p-2 lg:pt-2 text-start uppercase text-red-900">
              {" "}
              TESTIMONIAL
            </h2>
            <h1 className="text-sm lg:text-xl font-normal mx-6 mb-4 p-2 lg:pt-4 text-start  text-gray-900">
              {" "}
              At Dfits, we believe in the power of our community, and our
              customers' testimonials are a testament to the transformative
              potential that lies within every workout. Check out what our
              members are saying and get ready to be inspired!
            </h1>
            <div className="flex justify-start mx-4 mt-4 ">
              <button className="text-red-500 p-4 border-none" onClick={prevSlide}>
                <FaArrowLeft size={15} />
              </button>
              <button className="text-red-500 p-4 border-none" onClick={nextSlide}>
                <FaArrowRight size={15} />
              </button>
            </div>
          </div>

          <div className="flex flex-col p-2 mb-10 text-gray-900 relative">
            <p className="mx-6 text-xl lg:text-lg font-normal">
              {testimonials[currentSlide].text}
            </p>
            <p className="mx-6 text-gray-800 font-semibold mt-4">
              {testimonials[currentSlide].author}
            </p>

            <div className="flex justify-start mx-4 mt-4">
              <AvatarGroup>
                <Avatar alt="Remy Sharp" src={img1} />
                <Avatar alt="Travis Howard" src={img2} />
                <Avatar alt="Cindy Baker" src={img3} />
              </AvatarGroup>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
