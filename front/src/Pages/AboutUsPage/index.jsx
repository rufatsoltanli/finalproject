import React from 'react'
import "./style.scss"
import CountSection from '../../Components/CoutsSections'
import CommonTitle from '../../Components/Title'

function AboutUsPage() {
  return (
    <div className='aboutUsPage'>
      <h1>About Us</h1>
      <div className="weOffer">
        <div className="textCont"><div className="mainText">We offer customers a wide range of <span>commercial cars</span> and <span>luxury cars</span> for any occasion.</div>
          <div className="smallText">At Rentaly, we are dedicated to providing exceptional car rental services to our valued customers. With a commitment to quality, convenience, and customer satisfaction, we strive to make every rental experience a seamless and enjoyable one. We understand that every customer has unique needs and preferences when it comes to renting a car. That's why we maintain a diverse fleet of well-maintained vehicles to cater to various requirements. From compact cars for solo travelers to spacious SUVs for families, we have a wide range of options to choose from.</div>
        </div>
        <CountSection />
      </div>
      <div className="boardsOfDirectors">
        <div className="cardCont">
          <div className="card">
            <div className="img">
              <img src="https://www.madebydesignesia.com/themes/rentaly/images/team/1.jpg" alt="" />
              <div className="iconCont">
                <i className='fa-brands fa-facebook-f'></i>
                <i className='fa-brands fa-twitter'></i>
                <i className='fa-brands fa-linkedin'></i>
              </div>
            </div>
            <div className="name">Fynley Wilkinson</div>
            <div className="profession">
              Chief Creative Officer
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="https://www.madebydesignesia.com/themes/rentaly/images/team/2.jpg" alt="" />
              <div className="iconCont">
                <i className='fa-brands fa-facebook-f'></i>
                <i className='fa-brands fa-twitter'></i>
                <i className='fa-brands fa-linkedin'></i>
              </div>
            </div>
            <div className="name">Peter Welsh</div>
            <div className="profession">
              Chief Technology Officer
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src="https://www.madebydesignesia.com/themes/rentaly/images/team/3.jpg" alt="" />
              <div className="iconCont">
                <i className='fa-brands fa-facebook-f'></i>
                <i className='fa-brands fa-twitter'></i>
                <i className='fa-brands fa-linkedin'></i>
              </div>
            </div>
            <div className="name">John Shepard</div>
            <div className="profession">
              Chief Executive Officer
            </div>
          </div>
        </div>
      </div>
      <div className="featuresHighlight">
        <CommonTitle maintext={"Features Highlight"} />
        <div className="container">
          <div className="classAndRoad">
            <div className="class">
              <div className="icon"><i className='fa-solid fa-trophy'></i></div>
              <div className="textCont">
                <h6>First class services</h6>
                <div className="text">Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.</div>
              </div>
            </div>
            <div className="road">
              <div className="icon"><i className='fa-solid fa-road'></i></div>
              <div className="textCont">
                <h6>24/7 road assistance</h6>
                <div className="text">Reliable support when you need it most, keeping you on the move with confidence and peace of mind.</div>
              </div>
            </div>
          </div>
          <div className="carPhoto">
            <img src="https://www.madebydesignesia.com/themes/rentaly/images/misc/car.png" alt="" />
          </div>
          <div className="qualityAndPickUp">
            <div className="quality">
              <div className="textCont">
                <h6>Quality at Minimum Expense</h6>
                <div className="text">Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value.</div>
              </div>
              <div className="icon">
                <i className='fa-solid fa-hand-holding-dollar'></i>
              </div>
            </div>
            <div className="pickUp">
              <div className="textCont">
                <h6>Free Pick-Up & Drop-Off</h6>
                <div className="text">Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience</div>
              </div>
              <div className="icon"><i className='fa-solid fa-map-pin'></i></div>
            </div>
          </div>
        </div>
      </div>
      <div className="callUs">
        <div className="text">
          <div className='call'>
            Call / E-Mail us for further information. Rentaly customer care is here to help you anytime.
          </div>
          <div className="phone">
            <i className='fa-solid fa-phone'></i>
            +1 (775) 425-5522
          </div>
          <div className="email">
            <i className='fa-solid fa-envelope'></i>
            contact@rentaly.com
          </div>
        </div>
        <div className="img"></div>
      </div>
    </div>
  )
}

export default AboutUsPage