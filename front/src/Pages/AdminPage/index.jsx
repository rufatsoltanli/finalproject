import React, { useState } from 'react'
import "./style.scss"
import { NavLink } from 'react-router-dom'
import AdminCars from '../AdminCars'
import AdminBooking from '../AdminBooking'
import AdminUser from '../AdminUser'


function AdminPage() {
  const [control, setControl] = useState("car")
  return (
    <div className='adminPage'>
      <h1>Hi Admin!</h1>
      <div className="control"><div className="text">Choose what you want to control:</div>
        <div className="car" onClick={() => setControl("car")}>Cars</div> <div className="booking" onClick={() => setControl("booking")}>Bookings</div> <div className="user" onClick={() => setControl("user")}>Users</div>
      </div>
      {
        ShowControl(control)

      }
    </div>
  )
  function ShowControl(chosenCategory) {
    if (chosenCategory === "car") {
      return (
        <AdminCars />
      )
    }
    if (chosenCategory === "booking") {
      return (
        <AdminBooking />
      )
    } if (chosenCategory === "user") {
      return (
        <AdminUser />
      )
    }
  }
}

export default AdminPage