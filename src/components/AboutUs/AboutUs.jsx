import React from 'react'
import "./AboutUs.scss"
import Spoon from "../../assets/spoon.png"
const AboutUs = () => {
    return (
        <div className='about'>
            <div>

            <img src={Spoon} alt='spoon' className='about-image' />
            </div>
            <div className='about-description'>
                <h1>About Us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
                <button className='about-description-button'>Read More</button>
            </div>
        </div>
    )
}

export default AboutUs
