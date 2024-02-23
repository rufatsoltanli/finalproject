import React, { useContext, useEffect, useState } from 'react'

import Button from '../CommonComponents/button';
import "./style.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';


import 'swiper/css';
import 'swiper/css/navigation';
import { WishlistContext } from '../../Context/WishlistContext';


function SwiperOurVehicle() {
    const { wishlist, wishlistLength, toggleItemWishlist } = useContext(WishlistContext)

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/cars/")
            .then(res => res.json())
            .then(data => setApiData(data))
    }, [])

    const detail = useNavigate()
    return (
        <div className="swiperOurVehicle">
            <div className="slide">
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        1050: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        750: {
                            slidesPerView: 2,
                            spaceBetween: 20,

                        },
                        320: {
                            slidesPerView: 1,

                        },
                        0: {
                            slidesPerView: 1,

                        }

                    }}
                >
                    {apiData && apiData.slice(0, 7).map((x) => (
                        <SwiperSlide>
                            <div className="card">
                                <div className="img">
                                    <img src={x.image[0]} alt="" />
                                </div>
                                <div className="info">
                                    <div className="name">{x.name} <span><i className={`${wishlist.some((item => item._id === x._id)) ? 'fa-solid' : 'fa-regular'} fa-heart`} onClick={() => { toggleItemWishlist(x) }}></i></span></div>
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
                                    <div className="button" onClick={() => detail(`/detailPage/${x._id}`)}>
                                        <Button>Rent Now</Button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>))}
                </Swiper>
            </div>
        </div >
    )
}

export default SwiperOurVehicle