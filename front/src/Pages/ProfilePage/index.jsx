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
              <div className="icon">
                <i className='fa-solid fa-calendar-days'></i>
              </div>
              <div className="orders">
                <div className="number">
                  {
                    userData.bookings ? userData.bookings.length : null
                  }
                </div>
                <div className="text">Total Orders</div>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <i className='fa-regular fa-clock'></i>
              </div>
              <div className="orders">
                <div className="number">
                  {booking.bookings && booking.bookings.filter((x) => x.status === "Waiting").length}
                </div>
                <div className="text">Waiting</div>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <i className='fa-solid fa-check'></i>
              </div>
              <div className="orders">
                <div className="number">
                  {booking.bookings && booking.bookings.filter((x) => x.status === "Completed").length}
                </div>
                <div className="text">Completed orders</div>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <i className='fa-regular fa-calendar-xmark'></i>
              </div>
              <div className="orders">
                <div className="number">
                  {booking.bookings && booking.bookings.filter((x) => x.status === "Canceled*").length}
                </div>
                <div className="text">Canceled orders</div>
              </div>
            </div>
          </div>
          <div className="recentOrdersCont">
            <h3>My Recent Orders</h3>
            {/* <div className="tableTop">
              <div className="carName">Car Name</div>
              <div className="pickUpLoc">Pick Up Location</div>
              <div className="dropOfLoc">Drop Off Location	</div>
              <div className="day">Days</div>
              <div className="status">Status</div>
            </div>
            {booking.bookings && booking.bookings.map((x) => (
              <div className="card" key={x._id}>
                <div className="carName">{x.chosenCarName}</div>
                <div className="pickUpLoc">{x.pickUpLocation}</div>
                <div className="dropOfLoc">{x.dropOffLocation}</div>
                <div className="day">{x.day}</div>
                <div className="status">
                  <span className={
                    x.status === "Waiting" ? "waiting" :
                      x.status === "Completed" ? "completed" :
                        x.status === "Canceled" ? "canceled" : null
                  }>{x.status}</span>
                </div>
              </div>
            ))} */}
            <table>
              <tr>
                <th>Car Name</th>
                <th>Pick-up Location</th>
                <th>Drop-off Location</th>
                <th>Days</th>
                <th>Status</th>
              </tr>
              {booking.bookings && booking.bookings.map((x) => (
                <tr key={x._id} className='tableCar'>
                  <td className='tableCarName'>{x.chosenCarName}</td>
                  <td>{x.pickUpLocation}</td>
                  <td>{x.dropOffLocation}</td>
                  <td>{x.day}</td>
                  <td><span
                    className={
                      x.status === "Waiting" ? "waiting" :
                        x.status === "Completed" ? "completed" :
                          x.status === "Canceled" ? "canceled" : null
                    }>{x.status}</span></td>
                </tr>
              ))}
            </table>
          </div>
          <div className="favoriteCars"></div>
        </div>
      </div>
    </div >)


}

export default ProfilePage