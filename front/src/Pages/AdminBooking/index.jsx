import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"
import { JWTContext } from '../../Context/JwtContext'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';

function AdminBooking() {

  const { token, addToken, decodedToken, logOut } = useContext(JWTContext)

  const [bookingData, setBookingData] = useState([])

  const [editState, setEditState] = useState(null)


  useEffect(() => {
    firstFetch()
  }, [])

  function deleteBooking(id) {
    fetch('http://localhost:3000/booking/' + id, {
      headers: {
        "Authorization": `${token}`
      },
      method: 'DELETE',
    })
      .then(res => res.text())
      .then(res => {
        firstFetch()
        console.log(res)
      })
  }
  function approveBooking(id) {
    fetch("http://localhost:3000/booking/" + id,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `${token}`
        },
        body: JSON.stringify({ newStatus: "Completed" })
      })
      .then(function (res) {
        firstFetch()
        console.log(res)
      })
      .catch(function (res) { console.log(res) })
  }
  function cancelBooking(id) {
    fetch("http://localhost:3000/booking/" + id,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `${token}`
        },
        body: JSON.stringify({ newStatus: "Canceled" })
      })
      .then(function (res) {
        firstFetch()
        console.log(res)
      })
      .catch(function (res) { console.log(res) })
  }

  function firstFetch() {
    fetch("http://localhost:3000/booking/", {
      method: "GET",
      headers: {
        "Authorization": `${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookingData(data)
      })
  }



  return (
    <div className='adminBooking'>
      <table>
        <tr>
          <th>
            Username
          </th>
          <th>
            Chosen Car
          </th>
          <th>
            Pick-up location
          </th>
          <th>
            Drop-off location
          </th>
          <th>
            Amount of days
          </th>
          <th>
            Status
          </th>
          {/* <th>
            Edit booking
          </th> */}
          <th>
            Delete booking
          </th>
          <th>
            Approve booking
          </th>
          <th>
            Cancel booking
          </th>
        </tr>
        {bookingData && bookingData.map((x) => (
          <tr key={x._id}>
            <th>{x.bookerUsername}</th>
            <th>{x.chosenCarName}</th>
            <th>{x.pickUpLocation}</th>
            <th>{x.dropOffLocation}</th>
            <th>{x.day}</th>
            <th>{x.status}</th>
            {/* <th><i className='fa-solid fa-edit' onClick={() => setEditState(x)}></i></th> */}
            <th><i className='fa-solid fa-trash' onClick={() => deleteBooking(x._id)}></i></th>
            <th><i className='fa-solid fa-check' onClick={() => approveBooking(x._id)}></i></th>
            <th><i className='fa-solid fa-x' onClick={() => cancelBooking(x._id)}></i></th>

          </tr>
        ))}
      </table>

      {/* {editState ? <> <Formik
        initialValues={{ pickUpLocation: '', dropOffLocation: '', day: '', status: '' }}
        validationSchema={Yup.object({
          pickUpLocation: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          dropOffLocation: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          day: Yup.number()
            .max(30, 'Must be 30 day or less')
            .required('Required'),
          status: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            values = { ...values, bookerUsername: editState.bookerUsername }
            values = { ...values, chosenCar: editState.chosenCar }

            console.log(values);
            fetch("http://localhost:3000/booking/" + editState._id,
              {
                method: "PUT",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': `${token}`
                },
                body: JSON.stringify(values)
              })
              .then(function (res) {
                firstFetch()
                console.log(res)
              })
              .catch(function (res) { console.log(res) })
            setSubmitting(false);
            resetForm();

          }, 400);
        }}
      >
        <Form>
          <label htmlFor="pickUpLocation">Pick up location</label>
          <Field placeholder="Enter your pick-up location" name="pickUpLocation" type="text" />
          <div className="error">
            <ErrorMessage name="pickUpLocation" />
          </div>

          <label htmlFor="dropOffLocation">Drop off location</label>
          <Field placeholder="Enter your drop-off location" name="dropOffLocation" type="text" />
          <div className="error">
            <ErrorMessage name="dropOffLocation" />
          </div>

          <label htmlFor="day">How many days</label>
          <Field placeholder="Enter how days amount" name="day" type="number" />
          <div className="error">
            <ErrorMessage name="day" />
          </div>

          <label htmlFor="status">Status of booking</label>
          <Field placeholder="Enter status" name="status" type="text" />
          <div className="error">
            <ErrorMessage name="status" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>

        <h4 onClick={() => setEditState(null)}>Cancel editing</h4>
        <br />
      </>
        : null} */}
    </div>
  )
}

export default AdminBooking