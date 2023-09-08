import React from 'react'
import "./ContactUs.scss"
import logo from "../../assets/logo.png"
import Facebook from "../../assets/facebook.png"
import Instagram from "../../assets/instagram.png"
import Twitter from "../../assets/twitter.png"
const ContactUs = () => {
    return (
        <div className='contact'>
            <div className='contact-logo'>
                <img src={logo} alt="logo" />
            </div>

            <div className='contact-information'>
                <div>
                    <p >Contact Us</p>
                    <div className='contact-information-name'>
                        <span >
                            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
                        </span>
                        <span>
                            example2020@gmail.com
                        </span>
                        <span>
                            (904) 443-0343
                        </span>

                    </div>
                </div>
                <div>

                    <p>More</p>
                    <div className='contact-information-more'>
                        <span>About Us</span>
                        <span>Products</span>
                        <span>Career</span>
                        <span>Contact Us</span>
                    </div>
                </div>
                <div>

                    <div className='contact-information-icons'>
                        <p>Social Links</p>
                        <div>
                            <span>
                                <img src={Facebook} alt="facebook" />
                            </span>
                            <span>

                                <img src={Instagram} alt="instagram" />
                            </span>
                            <span>

                                <img src={Twitter} alt="twitter" />
                            </span>
                        </div>
                    </div>
                    <div>
                        <span>
                            © 2022 Food Truck Example
                        </span>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default ContactUs
