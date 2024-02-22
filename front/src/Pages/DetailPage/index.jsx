import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./style.scss"
import BookingFormik from '../../Components/BookingFormik'
import Hero from '../../Components/DetailsSlide'
import DetailsSlide from '../../Components/DetailsSlide'
import { JWTContext } from '../../Context/JwtContext'
import { jwtDecode } from 'jwt-decode'

function DetailPage() {
    const { id } = useParams()
    const { token, addToken, decodedToken, logOut } = useContext(JWTContext)


    const [carData, setCarData] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3000/cars/" + id)
            .then(res => res.json())
            .then(data => setCarData(data))
    }, [])

    return (
        <div className='detailPage'>
            <div className="rentHero">
                <h1>Rent Our Cars!</h1>
            </div>


            {carData && <div className="pageCont" key={carData._id}>
                <div className="carInfo">
                    <DetailsSlide images={carData.image} />
                    {/* <div className="img">
                        <img src={carData.image[0]} alt="" />
                    </div> */}
                    <div className="details">
                        <div className="carName">
                            {carData.name}
                        </div>
                        <div className="carDescription">
                            {carData.description}
                        </div>
                        <div className="specification">
                            <h4>Specifications</h4>
                            <div className="year">
                                <span>Year</span><span className='colored'>{carData.year}</span>
                            </div>
                            <div className="fuel">
                                <span>Fuel</span><span className='colored'>{carData.fuel}</span>
                            </div>
                            <div className="type">
                                <span>Body</span><span className='colored'>{carData.type}</span>
                            </div>
                            <div className="color">
                                <span>Color</span><span className='colored'>{carData.color}</span>
                            </div>
                            <div className="saloonColor">
                                <span>Interior Color</span><span className='colored'>{carData.interiorColor}</span>
                            </div>
                            <div className="city">
                                <span>City</span><span className='colored'>Baku</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rentPanel">
                    <div className="dailyRate">
                        <div className="text">Daily Rent</div>
                        <div className="price">${carData.price}</div>
                    </div>
                    <div className="bookThisCar">
                        <div className="header">
                            Book this car
                        </div>
                        <BookingFormik username={decodedToken.username} carName={carData.name} />
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default DetailPage