import React from "react";
import "../Card/Card.css";
import img3 from "../Images/img3.png";
const Card = () => {
  return (
    <div className="Card">
      <div className="img">
        <img src={img3} alt="img" />
      </div>
      <div className="Card-item">
        <h1>
          We design Website to <br /> Build Your Business
        </h1>
        <p>
          Hussain Tech Solutions, as a value driven organisation, we carry a
          purpose to empower businesses through process improvement and
          simplification by implementation of technology.
          <br />
          <br />
          With a vision to excel, our each plan and action is inspired by our
          core values that enable us to focus towards growth on the righteous
          path.
        </p>
      </div>
    </div>
  );
};

export default Card;
