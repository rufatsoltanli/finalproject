import React from 'react'
import CommonTitle from '../Title'
import "./style.scss"

function ExploreTheWorld() {
    return (
        <div className='exploreTheWorldSection'>
            <CommonTitle maintext={"Explore the world with comfortable car"} />
            <div className="card">
                <div className="icon">
                    <i className='fa-solid fa-location'></i>
                </div>
                <h4>First Class Services</h4>
                <div className="text">
                    Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.
                </div>
            </div>
            <div className="card">
                <div className="icon">
                    <i className='fa-solid fa-location'></i>
                </div>
                <h4>24/7 road assistance</h4>
                <div className="text">Reliable support when you need it most, keeping you on the move with confidence and peace of mind.</div>
            </div>
            <div className="card">
                <div className="icon">
                    <i className='fa-solid fa-location'></i>
                </div>
                <h4>Free Pick-Up & Drop-Off</h4>
                <div className="text">Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.</div>
            </div>
            <div className="cardCont">
                <div className="peopleCard">
                    <div className="icon"><i className='fa-solid fa-quote-right'></i></div>
                    <div className="header">Excellent Car Rent Service!</div>
                    <div className="text"></div>
                    <div className="name"></div>
                </div>
                <div className="peopleCard">
                    <div className="icon"><i className='fa-solid fa-quote-right'></i></div>
                    <div className="header">Excellent Car Rent Service!</div>
                    <div className="text"></div>
                    <div className="name"></div>
                </div>
                <div className="peopleCard">
                    <div className="icon"><i className='fa-solid fa-quote-right'></i></div>
                    <div className="header">Excellent Car Rent Service!</div>
                    <div className="text"></div>
                    <div className="name"></div>
                </div>
            </div>
        </div>
    )
}

export default ExploreTheWorld