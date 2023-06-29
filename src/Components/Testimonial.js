import React from 'react';
import Profilepic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They Are Saying</h1>
            <p className='primary-text'>
            a written declaration certifying to a person's character, conduct,
             or qualifications, or to the value, excellence, etc., 
            </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={Profilepic} alt="" />
            <p>
            At their best, they are authentic, descriptive,
             and specific so that future buyers can identify with the customer, the problem, and how they solved it.
            </p>
            <div className='testimonials-stars-container'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Doe</h2>
        </div>

    </div>
  )
}

export default Testimonial