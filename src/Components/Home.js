import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
        <section id="home">
            <div className="home-conteiner">
                <Navbar />
                <div className="home-banner-container">
                    <div className="home-bannerImage-container">
                        <img src={BannerBackground} alt="" />
                    </div>
                    <div className="home-text-section">
                        <h1 className="primary-heading">
                            Turn Social Media Engagement into Real Rewards — No
                            Apps, No Cards, Just Authentic Loyalty!
                        </h1>
                        <p className="primery-text">
                            We turn everyday social media posts into powerful
                            marketing tools. When customers share your business
                            on Instagram through Stories, Posts, or Reels, they
                            earn rewards—and you get free, authentic exposure.
                            No expensive ads, no complicated systems. Just real
                            people sharing your brand with their networks,
                            helping you reach more customers without spending a
                            fortune. Grow smarter, not harder..
                        </p>
                        <button className="secondary-button">
                            Message Us <FiArrowRight />
                        </button>
                    </div>
                    <div className="home-image-container">
                        <img src={BannerImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
