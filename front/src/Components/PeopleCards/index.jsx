import React from 'react'
import "./style.scss"

function PeopleCards() {
    return (
        <div className='peopleCards'>
            <div className="peopleCard n1">
                <img src="https://www.madebydesignesia.com/themes/rentaly/images/testimonial/1.jpg" alt="" />
                <div className="overlay">
                    <div className="icon"><i className='fa-solid fa-quote-right'></i></div>
                    <div className="header">Excellent Car Rent Service!</div>
                    <div className="text">I have been using Rentaly for my Car Rental needs for over 5 years now. I have never had any problems with their service. Their customer support is always responsive and helpful. I would recommend Rentaly to anyone looking for a reliable Car Rental provider.</div>
                    <div className="name">Stepanie Hutchkiss</div>
                </div>
            </div>
            <div className="peopleCard n2">
                <img src="https://www.madebydesignesia.com/themes/rentaly/images/testimonial/2.jpg" alt="" />
                <div className="overlay">
                    <div className="icon"><i className='fa-solid fa-quote-right'></i></div>
                    <div className="header">Excellent Car Rent Service!</div>
                    <div className="text">We have been using Rentaly for our trips needs for several years now and have always been happy with their service. Their customer support is Excellent Service! and they are always available to help with any issues we have. Their prices are also very competitive.</div>
                    <div className="name">Jovan Reels</div></div>
            </div>
            <div className="peopleCard n3">
                <img src="https://www.madebydesignesia.com/themes/rentaly/images/testimonial/3.jpg" alt="" />
                <div className="overlay">
                    <div className="icon"><i className='fa-solid fa-quote-right'></i></div>
                    <div className="header">Excellent Car Rent Service!</div>
                    <div className="text">Endorsed by industry experts, Rentaly is the Car Rental solution you can trust. With years of experience in the field, we provide fast, reliable and secure Car Rental services</div>
                    <div className="name">Kanesha Keyton</div>
                </div>
            </div>

        </div>
    )
}

export default PeopleCards