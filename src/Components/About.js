import React from "react";
import AboutBackGroung from "../Assets/about-background.png";
import AboutBackGroungImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackGroung} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackGroungImage} alt="" />
            </div>
            <div className="about-section-image-container">
                <p className="primary-heading">About Us</p>
                <h1 className="primary-heading">
                    Organical Growth for Your Business
                </h1>
                <p className="primary-text">
                    We turn everyday social media posts into powerful marketing
                    tools.
                </p>
                <p className="primary-text">
                    Growing your social media presence can be a daunting task,
                    but we make it simple and fun with our easy-to-use platform.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button">
                        {" "}
                        <BsFillPlayCircleFill /> Watch Video
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
