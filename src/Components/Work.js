import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Choose your favorite meals from our broad selection of available meals and enjoy a delicious lunch or dinner at home.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Choose how often you want to order from us. This could be once or twice a week.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Delivery",
            text: "We deliver your meals as fast as possible, so you can enjoy a healthy meal without spending too much time.",
        },
    ];
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading">How It Works</h1>
                <p className="primary-text">
                    Eat healthy to feel healthy. Live healthy to feel healthy.
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
    );
};

export default Work;
