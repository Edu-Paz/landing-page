import React from "react";
import AboutBackGroung from "../Assets/about-background.png";
import AboutBackGroungImage from "../Assets/about-background-image.png";
import { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const About = () => {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    const accordionItems = [
        {
            title: "Loyalty Built for the Instagram Era – Not Spreadsheets or Plastic Cards",
            content: (
                <div>
                    <p>
                        While traditional loyalty programs rely on punch cards
                        or apps customers forget to download, we leverage the
                        platform they already use daily:{" "}
                        <strong>Instagram.</strong>
                    </p>
                    <br></br>
                    <p>
                        🛠️ <strong>How It Works:</strong> Our API-based system
                        automatically detects Stories, Posts, or Reels that tag
                        your business—even if the post is deleted later, we keep
                        the record.
                    </p>
                    <br></br>
                    <p>
                        📊 <strong>Real-Time Dashboard:</strong> Track mentions,
                        customer engagement trends, and redemption rates from a
                        single interface. No coding or Instagram login required.
                    </p>
                    <br></br>
                    <p>
                        💡 <strong>Flexible Rewards Engine:</strong> Set rules
                        like 5 Stories = 1 Free Drink or 10 Reels = VIP Event
                        Access. Change campaigns seasonally with 2 clicks.
                    </p>
                </div>
            ),
        },
        {
            title: "Our Core Values",
            content: (
                <div>
                    <p>
                        <strong>Where Technology Meets Human Connection</strong>
                    </p>
                    <br></br>
                    <p>
                        We’re obsessed with eliminating friction—for businesses
                        and customers alike:
                    </p>
                    <br></br>
                    <p>
                        <strong>🔒 Privacy by Design:</strong> Customers don’t
                        need to share emails or phone numbers. We use
                        Instagram’s public API (no access to private DMs or
                        accounts).
                    </p>
                    <br></br>
                    <p>
                        <strong>📱 Zero App Philosophy:</strong> 87% of loyalty
                        apps are deleted within a week. We bypass this by using
                        Instagram Direct Messages for reward notifications.
                    </p>
                    <br></br>
                    <p>
                        <strong>🌱 Sustainable Growth:</strong> For every 100
                        rewards redeemed, businesses gain an average of 320+
                        organic impressions through customer posts.
                    </p>
                </div>
            ),
        },
        {
            title: "Global Vision, Local Impact",
            content: (
                <div>
                    <p>
                        From São Paulo cafés to Tokyo boutiques,{" "}
                        <strong>we</strong>
                        adapt to your culture, not the other way around.
                    </p>
                    <br></br>
                    <p>
                        We’re built for businesses that value cultural nuance:
                    </p>
                    <br></br>
                    <p>
                        🌍 <strong>Localization Engine:</strong> Reward names and messages
                        auto-translate to the customer’s language (supports 18
                        languages, from Portuguese to Japanese).
                    </p>
                    <br></br>
                    <p>
                        📍 <strong>Geo-Targeted Campaigns:</strong> Run
                        location-specific offers (e.g., ‘Mention us during Rio
                        Carnival = Double Points’).
                    </p>
                    <br></br>
                    <p>
                        🧩 <strong>Local Partner Network</strong>: Integrate regional reward
                        providers (e.g., Uber Credits in Brazil, Starbucks
                        Rewards in the US) without extra fees.
                    </p>
                </div>
            ),
        },
    ];

    return (
        <section id="about">
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
                    <p className="primary-text"></p>
                    <p className="primary-text">
                        Growing your social media presence can be a daunting
                        task, but we make it simple and fun with our easy-to-use
                        platform.
                    </p>
                    {accordionItems.map((item, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel${index}`}
                            onChange={handleChange(`panel${index}`)}
                            className="custom-accordion">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${index}-content`}
                                id={`panel${index}-header`}>
                                <Typography variant="h6" component="h3">
                                    {item.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{item.content}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                    <div className="about-buttons-container">
                        <button className="secondary-button">Learn More</button>
                        {/* <button className="watch-video-button">
                            {" "}
                            <BsFillPlayCircleFill /> Watch Video
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
