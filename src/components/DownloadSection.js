import React from "react";
import "./Styles/DownloadSection.css";
import IphoneImg from "../assets/iPhone 13.png";

const DownloadSection = () => {
  return (
    <section className="download-section">
      <div className="left-contents">
        <h2>
          Get real-time safety alerts on your <br />
          phone with our app
        </h2>

        <p>
          Get real-time safety alerts on your phone <br />
          with our app
        </p>

        <button>Download the App</button>
      </div>

      <div className="right-phone">
        <div className="phone-bg-circle"></div>
        <img src={IphoneImg} alt="App Screenshot" className="iphone-img" />
      </div>
    </section>
  );
};

export default DownloadSection;
