import React from "react";
import "./Styles/FooterSection.css";

const FooterSection = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">

        {/* LEFT: DATA SOURCES */}
        <div className="footer-data">
          <h3>Data sources:</h3>
          <p>
            Local police reports, government travel advisories, <br />
            user reports, crime statistics, AI analysis. Safety <br />
            scores updated hourly.
          </p>
        </div>

        {/* RIGHT: RELATED DESTINATIONS */}
        <div className="footer-destinations">
          <h3>Related Destinations:</h3>
          <ul>
            <li>Is Madrid Safe?</li>
            <li>Is Paris Safe?</li>
            <li>Is Rome Safe?</li>
            <li>Is Lisbon Safe?</li>
          </ul>
        </div>

        {/* DOWNLOAD BUTTON */}
        <button className="footer-btn">Download the App</button>

        {/* BOTTOM LINKS */}
        <div className="footer-links">
          About | Privacy | Terms | Contact
        </div>

        {/* COPYRIGHT */}
        <div className="footer-copy">
          © 2025 knowyourtrips. All rights reserved.
        </div>

      </div>
    </div>
  );
};

export default FooterSection;
