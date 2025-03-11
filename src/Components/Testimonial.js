import React, { useState, useRef } from "react";
import { AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ProfilePicOne from "../Assets/user-1.png";
import ProfilePicTwo from "../Assets/user-2.png";
import ProfilePicThree from "../Assets/user-3.png";
import ProfilePicFour from "../Assets/user-4.png";

const testimonialsData = [
  {
    name: "Samantha Doe",
    role: "Software Engineer",
    text: "The system helped me grow my business by 20%. It's a game-changer!",
    stars: 4,
    image: ProfilePicOne,
  },
  {
    name: "John Doe",
    role: "Engineer",
    text: "The system helped me grow my business by 20%. It's a game-changer!",
    stars: 2,
    image: ProfilePicTwo,
  },
  {
    name: "George Doe",
    role: "Coffee Shop Owner",
    text: "The system helped me grow my business by 20%. It's a game-changer!",
    stars: 5,
    image: ProfilePicThree,
  },
  {
    name: "Robert Doe",
    role: "Barbershop owner",
    text: "The system helped me grow my business by 20%. It's a game-changer!",
    stars: 5,
    image: ProfilePicFour,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonialsData.length - 1 ? prev + 1 : prev));
  };

  return (
    <section className="testimonials">
      <div className="testimonial-header">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What Our Clients Say</h1>
      </div>

      <div className="carousel-container">
        <button 
          className="nav-button" 
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <AiOutlineArrowLeft />
        </button>

        <div className="cards-wrapper" ref={carouselRef}>
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="user-image"
              />
              <div className="card-content">
                <h3>{testimonial.name}</h3>
                <p className="role">{testimonial.role}</p>
                <div className="stars">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <AiFillStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="nav-button" 
          onClick={handleNext}
          disabled={currentIndex === testimonialsData.length - 1}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;