import React from 'react';
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "food, substance consisting essenti processes and to furnish energy.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "food,substance consisting essentially of protein and to furnish energy.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "food, substance consisting essentially of protein,,growth  and to furnish energy.",
        },
    ];
  return ( 
  <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Works</h1>
            <p className='primary-text'>
            Food is necessary to produce energy and meet our body's nutrient demands.
             Food can be obtained from either plants or animals.
             These nutrients have a specific role to play in the human body.
            </p>
        </div>
        <div className='work-section-buttom'>
            { 
              workInfoData.map((data) => (
                <div className='work-section-info' key={data.title}>
                    <div className='info-boxes-img-container'>
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

export default Work