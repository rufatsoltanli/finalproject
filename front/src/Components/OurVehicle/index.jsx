import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import CommonTitle from '../Title';
import Button from '../CommonComponents/button';
import "./style.scss"


function OurVehicle() {
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/cars/")
            .then(res => res.json())
            .then(data => setApiData(data))
    }, [])


    return (
        <div className='ourVehicle'>
            <CommonTitle smalltext={"Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys."} maintext={"Our Vehicle Fleet"} />
            <div className="slide">
                <Splide options={{
                    rewind: true,
                    width: "100%",
                    height: "100%",
                    gap: '1rem',
                    perPage: 3,
                    focus: 'center',
                    breakpoints: {
                        1050: {
                            perPage: 2
                        },
                        750: {
                            perPage: 1,
                        }
                    }
                }}>
                    {apiData && apiData.map((x) => (
                        <SplideSlide>
                            <div className="card">
                                <div className="img">
                                    <img src={x.image} alt="" />
                                </div>
                                <div className="info">
                                    <div className="name">{x.name} <span><i className='fa-solid fa-heart'></i></span></div>
                                    <div className="detailedInfo">
                                        <div className="person"><i className='fa-solid fa-user'></i> 5</div>
                                        <div className="luggage"><i className='fa-solid fa-briefcase'></i> 2</div>
                                        <div className="door"><i className='fa-solid fa-door-open'></i> 4</div>
                                        <div className="type"><i className='fa-solid fa-car'></i> {x.type}</div>
                                    </div>
                                    <hr />
                                </div>
                                <div className="price">
                                    <div className="dailyRate">
                                        <span className='daily'>Daily rate from</span>
                                        <span className='price'>${x.price}</span>
                                    </div>
                                    <div className="button">
                                        <Button>Rent Now</Button>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    )
}

export default OurVehicle