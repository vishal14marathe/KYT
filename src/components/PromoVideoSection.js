import React from "react";
import "./Styles/PromoVideoSection.css";
import promoVideo from "../assets/promo_video.mp4";

const PromoVideoSection = () => {
  return (
    <div className="promo-wrapper">
      <video
        className="promo-video"
        src={promoVideo}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default PromoVideoSection;
