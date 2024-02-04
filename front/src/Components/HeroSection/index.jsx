import React from 'react'
import "./style.scss"
import Button from '../CommonComponents/button'

function HeroSection() {
  return (
    <div className='heroSection'>
      <div className="text">
        <div className="header">Plan your trip now</div>
        <div className="exploreTheWorld">
          Explore the world with comfortable car
        </div>
        <div className="smallText">
          Embark on unforgettable adventures and discover the world in unparalleled comfort and style with our fleet of exceptionally comfortable cars.
        </div>
        <div className="buttons">
          <div className="greenButton"><Button>Choose a Car</Button></div>
          <div className="blackButton"><Button>Get the App</Button></div>
        </div>
      </div>
      <div className="car">
        <img src="https://www.madebydesignesia.com/themes/rentaly/images/misc/car-2.png" alt="" />
      </div>
    </div>
  )
}

export default HeroSection