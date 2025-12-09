import React from "react";
import "./Styles/CTASection.css";
import phones from "../assets/iPhone 17.png"; // the two tilted phones image

const CTASection = () => {
  return (
    <div className="cta-wrapper">
      <div className="cta-container">
        {/* Phones Image */}
        <img src={phones} alt="phones" className="cta-phones-img" />

        {/* Right Section */}
        <div className="cta-content">
          <h2 className="cta-title">Travel Barcelona with confidence</h2>

          <button className="cta-btn">Download the App</button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
