import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"
import { JWTContext } from '../../Context/JwtContext'


function ProfilePage() {
  const { token, addToken, decodedToken, logOut, checkToken } = useContext(JWTContext)

  console.log(decodedToken);

  const [booking, setBooking] = useState([])

  const [userData, setUserData] = useState([])


  useEffect(() => {

    fetch("http://localhost:3000/users/" + decodedToken.id, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
      .then(res => res.json())
      .then(data => setUserData(data))
      .catch(error => console.log(error.message))


  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/users/getBookings/" + decodedToken.id, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
      .then(res => res.json())
      .then(data => setBooking(data))
      .catch(error => console.log(error.message))


  }, [])
  console.log(booking);




  return (
    <div className='profilePage'>
      <div className="pageCont">
        <div className="profileCard">

          <div className="name"><span>Username</span>{decodedToken && decodedToken.username}</div>
          <div className="email"><span>E-mail</span>{decodedToken && decodedToken.email}</div>
          <div className="signOut" onClick={() => logOut()}>
            Sign out
          </div>
        </div>
        <div className="profileInfo">
          <div className="ordersCont">
            <div className="card">
              <div className="icon"></div>
              <div className="orders">
                <div className="number">
                  {
                    userData.bookings ? userData.bookings.length : null
                  }
                </div>
                <div className="text">All Orders</div>
              </div>
            </div>
            <div className="card">
              <div className="icon"></div>
              <div className="orders">
                <div className="number">
                  {booking.bookings && booking.bookings.filter((x) => x.status === "Waiting").length}
                </div>
                <div className="text">Waiting</div>
              </div>
            </div>
            <div className="card">
              <div className="icon"></div>
              <div className="orders">
                <div className="number">
                  {booking.bookings && booking.bookings.filter((x) => x.status === "Completed").length}
                </div>
                <div className="text">Completed orders</div>
              </div>
            </div>
            <div className="card">
              <div className="icon"></div>
              <div className="orders">
                <div className="number">
                  {booking.bookings && booking.bookings.filter((x) => x.status === "Canceled*").length}
                </div>
                <div className="text">Canceled orders</div>
              </div>
            </div>
          </div>
          <div className="recentOrdersCont"></div>
          <div className="favoriteCars"></div>
        </div>
      </div>
    </div>)


}

export default ProfilePage