import React from "react";
import "../Mini/Mininav.css";
import { BsTelephone, BsWhatsapp, BsFacebook, BsTwitter } from "react-icons/bs";

const Mininav = () => {
  return (
    <div className="mini">
      <div className="logo">
        <h5>Contact Us</h5>
        <BsTelephone />
        +92 308 0495099
      </div>
      <div className="mini-logo">
        <BsWhatsapp />
        <BsFacebook />
        <BsTwitter />
      </div>
    </div>
  );
};

export default Mininav;
