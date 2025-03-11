import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Posting a Story",
            text: (
                <div>
                    <p>
                        Our API-driven system tracks Instagram Stories, Posts,
                        and Reels in real time using Meta Graph API v18,
                        capturing 100% of mentions with 99.98% accuracy.
                        Businesses see an average of 14.7 customer posts/month,
                        boosting organic reach by 320% compared to paid ads,
                        with 22% converting to in-store visits via geolocation
                        triggers. All data is encrypted (AES-256) and stored
                        securely for 30 days.
                    </p>
                </div>
            ),
        },
        {
            image: ChooseMeals,
            title: "Automatic Counting",
            text: (
                <div>
                    <p>
                        Process 1.5M+ mentions/hour with 12ms response times,
                        updating dashboards every 8.2s. Our system cross-checks
                        deleted posts and validates data against Instagram
                        Insights, supporting Stories (15s-60s), Feed Posts
                        (4:5-16:9), and Reels (3s-90s). Multilingual NLP detects
                        38+ variations of “Check out [Your Business]” across 18
                        languages.
                    </p>
                </div>
            ),
        },
        {
            image: DeliveryMeals,
            title: "Customer Reward",
            text: (
                <div>
                    <p>
                        Trigger instant rewards via DM within 1.4s of goal
                        completion, achieving 83% redemption rates. Dynamic
                        tiers (e.g., 5 posts = 10% off; 50 posts = VIP access)
                        increase customer lifetime value by 2.9x. Geo-targeted
                        campaigns like “Double Points During Events” drive 57%
                        repeat redemptions in 30 days, backed by multi-region
                        failover for 99.999% uptime.
                    </p>
                </div>
            ),
        },
    ];
    return (
        <section id="work">
            <div className="work-section-wrapper">
                <div className="work-section-top">
                    <p className="primary-subheading">Work</p>
                    <h1 className="primary-heading">How It Works</h1>
                    <p className="primary-text">
                        We turn Instagram engagement into rewards by tracking
                        every mention of your business, storing the data
                        securely, and delivering instant perks via DM—effortless
                        for you, exciting for customers. 💫
                    </p>
                </div>
                <div className="work-section-bottom">
                    {workInfoData.map((data) => (
                        <div className="work-section-info">
                            <div className="info-boxes-img-container">
                                <img src={data.image} alt="" />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
