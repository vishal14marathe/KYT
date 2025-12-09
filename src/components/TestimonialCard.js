import React from "react";
import "./Styles/TestimonialCard.css";

import person from "../assets/Man_Img.png"; // your man image
import quote from "../assets/ComaImg.png"; // your purple comma image

const TestimonialCard = () => {
  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-card">
        {/* LEFT SIDE */}
        <div className="testimonial-left">
          {/* FLOATING WHITE BOX */}
          <div className="floating-box"></div>

          {/* IMAGE */}
          <img src={person} alt="person" className="testimonial-img" />
        </div>

        {/* RIGHT SIDE */}
        <div className="testimonial-content">
          <img src={quote} alt="quote" className="quote-img" />

          <p className="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
