import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="innerWidth paddings flexCenter f-container">
        {/* left-side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" width={120} />
          <span className="seconderyText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>

          <div className="flexCenter menu">
            <span>Property</span>
            <span>Service</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
