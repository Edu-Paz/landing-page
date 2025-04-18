import React from "react";
import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <section id="footer">
            <div className="footer-wrapper">
                <div className="footer-section-one">
                    <div className="footer-logo-container">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="footer-icons">
                        <BsTwitter />
                        <SiLinkedin />
                        <BsYoutube />
                        <FaFacebookF />
                    </div>
                </div>
                <div className="footer-section-two">
                    <div className="footer-section-columns">
                        <span>Quality</span>
                        <span>Help</span>
                        <span>Share</span>
                        <span>Carrers</span>
                        <span>Testimonials</span>
                        <span>Work</span>
                    </div>
                    <div className="footer-section-columns">
                        <span>244-444-4444</span>
                        <span>hello@example.com</span>
                        <span>press@example.com</span>
                        <span>contact@example</span>
                    </div>
                    <div className="footer-section-columns">
                        <span>Terms & Conditions</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
