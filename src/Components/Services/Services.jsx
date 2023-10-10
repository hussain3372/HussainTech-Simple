import React from "react";
import "../Services/Services.css";
import Tilt from "react-parallax-tilt";
import { BsWordpress } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { GiSewingNeedle } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SiBisecthosting } from "react-icons/si";
const Services = () => {
  return (
    <div className="Services">
      <h1>OUR SERVICES</h1>
      <div className="wordpress">
        <Tilt className="Tilt" options={{ max: 25 }}>
          <div className="word">
            <BsWordpress className="icon" size={50} />
            <h2>Wordpress</h2>
          </div>
        </Tilt>
        <Tilt className="Tilt" options={{ max: 25 }}>
          <div className="word">
            <FaReact size={50} />
            <h2>React Js</h2>
          </div>
        </Tilt>
        <Tilt className="Tilt" options={{ max: 25 }}>
          <div className="word">
            <SiCss3 size={50} />
            <h2>CSS</h2>
          </div>
        </Tilt>
      </div>
      <div className="wordpress">
        <Tilt className="Tilt" options={{ max: 25 }}>
          <div className="word">
            <TbBrandJavascript className="icon" size={50} />
            <h2>Javascript</h2>
          </div>
        </Tilt>
        <Tilt className="Tilt" options={{ max: 25 }}>
          <div className="word">
            <FaNodeJs size={50} />
            <h2>Node Js</h2>
          </div>
        </Tilt>
        <Tilt className="Tilt" options={{ max: 25 }}>
          <div className="word">
            <BiLogoMongodb size={50} />
            <h2>Mongo DB</h2>
          </div>
        </Tilt>
      </div>
      <div className="wordpress">
        <Tilt className="Tilt" options={{ max: 25 }}>
          <div className="word">
            <GiSewingNeedle className="icon" size={50} />
            <h2>Logo</h2>
          </div>
        </Tilt>
        <Tilt className="Tilt" options={{ max: 25 }}>
          <div className="word">
            <AiOutlineShoppingCart size={50} />
            <h2>E-Commerce</h2>
          </div>
        </Tilt>
        <Tilt className="Tilt" options={{ max: 25 }}>
          <div className="word">
            <SiBisecthosting size={50} />
            <h2>Hosting</h2>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Services;
