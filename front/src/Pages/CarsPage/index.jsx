import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"
import Button from '../../Components/CommonComponents/button'
import RangeSlider from "rsuite/RangeSlider";
import "rsuite/dist/rsuite.css";
import { useNavigate } from 'react-router-dom';
import { WishlistContext } from '../../Context/WishlistContext';

function CarsPage() {

  const { toggleItemWishlist, wishlist } = useContext(WishlistContext)

  const [choosenCarCategory, setChoosenCarCategory] = useState("")

  const [firstValue, setFirstValue] = useState(100);
  const [secondValue, setSecondValue] = useState(320);
  function handleRanges(value) {
    console.log(value);
    setFirstValue(value[0]);
    setSecondValue(value[1]);
  }

  const [apiData, setApiData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/cars/")
      .then(res => res.json())
      .then(data => setApiData(data))
  }, [])

  const detail = useNavigate()

  return (
    <div className='carsPage'>
      <div className="carsHero">
        <h1>Our Cars</h1>
      </div>
      <div className="pageCont">
        <div className="sideBar">
          <div className="slideBar">
            <h4>Price:</h4>
            <RangeSlider defaultValue={[100, 320]} min={100} max={320} onChange={handleRanges} />
            <div className="price">
              From <span>{firstValue}</span> to <span>{secondValue}</span>
            </div>
          </div>
          <div className="categories">
            <h4>Category:</h4>
            <div className={`chooseCategory ${choosenCarCategory === "" ? "active" : null}`} onClick={() => { setChoosenCarCategory("") }}>
              All
            </div>
            <div className={`chooseCategory ${choosenCarCategory === "SUV" ? "active" : null}`} onClick={() => { setChoosenCarCategory("SUV") }}>
              SUV
            </div>
            <div className={`chooseCategory ${choosenCarCategory === "Hatchback" ? "active" : null}`} onClick={() => { setChoosenCarCategory("Hatchback") }}>
              Hatchback
            </div>
            <div className={`chooseCategory ${choosenCarCategory === "Sedan" ? "active" : null}`} onClick={() => { setChoosenCarCategory("Sedan") }}>
              Sedan
            </div>
            <div className={`chooseCategory ${choosenCarCategory === "Sport Car" ? "active" : null}`} onClick={() => { setChoosenCarCategory("Sport Car") }}>
              Sport Car
            </div>
            <div className={`chooseCategory ${choosenCarCategory === "Minivan" ? "active" : null}`} onClick={() => { setChoosenCarCategory("Minivan") }}>
              Minivan
            </div>
            <div className={`chooseCategory ${choosenCarCategory === "Truck" ? "active" : null}`} onClick={() => { setChoosenCarCategory("Truck") }}>
              Truck
            </div>
          </div>
        </div>
        <div className="pageContainer">
          <div className="cardCont">
            {apiData && apiData
              .filter((x) => x.price > firstValue && x.price < secondValue)
              .filter((x) => x.type.toLowerCase().includes(choosenCarCategory.toLowerCase()))
              .map((x) => (
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
              ))}
          </div>
        </div></div>
    </div>
  )
}

export default CarsPage