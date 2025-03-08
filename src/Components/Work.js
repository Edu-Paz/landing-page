import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Posting a Story",
            text: "Your customers post Stories tagging your establishment. Every post is an engagement opportunity!",
        },
        {
            image: ChooseMeals,
            title: "Automatic Counting",
            text: "Our system automatically counts every Story, Post, or Reel. Everything is simple and integrated!",
        },
        {
            image: DeliveryMeals,
            title: "Customer Reward",
            text: "When the goal is reached, your customer gets a reward. Loyalty and engagement guaranteed!",
        },
    ];
    return (
        <section id="work">
            <div className="work-section-wrapper">
                <div className="work-section-top">
                    <p className="primary-subheading">Work</p>
                    <h1 className="primary-heading">How It Works</h1>
                    <p className="primary-text">
                        Eat healthy to feel healthy. Live healthy to feel
                        healthy.
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
