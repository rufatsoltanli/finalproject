import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"

import { JWTContext } from '../../Context/JwtContext'
import { NavLink } from 'react-router-dom'

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function AdminCars() {

  const [carsData, setCarsData] = useState([])

  const [editState, setEditState] = useState(null)
  console.log(editState);

  const [createState, setCreateState] = useState(false)

  const { token, addToken, decodedToken, logOut } = useContext(JWTContext)

  function firstFetch(params) {
    fetch('http://localhost:3000/cars/', {
      headers: {
        "Authorization": `${token}`
      }
    })
      .then(res => res.json())
      .then(data => setCarsData(data))
  }
  // firstFetch()
  useEffect(() => {
    firstFetch()
  }, [])

  function deleteCar(id) {
    fetch('http://localhost:3000/cars/' + id, {
      method: "DELETE",
      headers: {
        "Authorization": `${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        firstFetch()
        console.log(data)
      })
  }

  // firstFetch()
  useEffect(() => {
    firstFetch()
  }, [])

  return (
    <div className='adminCars'>
      <div className="admPage">
        Go back to <NavLink to={"/adminPage/"}>Admin Page</NavLink>
      </div>

      {editState ? <div className="editCar">
        <h2>Edit Car</h2>
        <Formik
          initialValues={{ price: '', type: '', year: '', fuel: '', description: '', color: '', interiorColor: '', image: '', name: '' }}
          validationSchema={Yup.object({
            price: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            type: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            year: Yup.string()
              .max(1000, 'Must be 4 characters ')
              .required('Required'),
            fuel: Yup.number()
              .max(10000, 'Must be 4 characters')
              .required('Required')
            , description: Yup.string()
              .max(40, 'Must be 40 characters or less')
              .required('Required'),
            color: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required')
            ,
            interiorColor: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            image: Yup.string()
              .required('Required')
            ,
            name: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              console.log(values);
              fetch(`http://localhost:3000/cars/` + editState, {
                method: 'PUT',
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                  'Authorization': `${token}`
                },
                body: JSON.stringify(values)
              })
                .then(() => {
                  firstFetch()
                  setEditState(null)

                })
              setSubmitting(false);

              resetForm();
            }, 400);
          }}
        >
          <Form>
            <label htmlFor="price">Price</label>
            <Field name="price" type="number" />
            <div className="error">
              <ErrorMessage name="price" />
            </div>

            <label htmlFor="type">Type</label>
            <Field name="type" type="text" />
            <div className="error">
              <ErrorMessage name="type" />
            </div>

            <label htmlFor="year">Year</label>
            <Field name="year" type="number" />
            <div className="error">
              <ErrorMessage name="year" />
            </div>

            <label htmlFor="fuel">Fuel</label>
            <Field name="fuel" type="number" />
            <div className="error">
              <ErrorMessage name="fuel" />
            </div>

            <label htmlFor="description">Description</label>
            <Field name="description" type="text" />
            <div className="error">
              <ErrorMessage name="description" />
            </div>

            <label htmlFor="color">Color</label>
            <Field name="color" type="text" />
            <div className="error">
              <ErrorMessage name="color" />
            </div>

            <label htmlFor="interiorColor">Interior Color</label>
            <Field name="interiorColor" type="text" />
            <div className="error">
              <ErrorMessage name="interiorColor" />
            </div>

            <label htmlFor="image">Image</label>
            <Field name="image" type="text" />
            <div className="error">
              <ErrorMessage name="image" />
            </div>

            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <div className="error">
              <ErrorMessage name="name" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <h4 onClick={() => setEditState(null)}>Cancel editing</h4>
        <br />
      </div> : null
      }
      {
        createState ? <div className="createCar">
          <h2>Create Car</h2>
          <Formik
            initialValues={{ price: '', type: '', year: '', fuel: '', description: '', color: '', interiorColor: '', image: '', name: '' }}
            validationSchema={Yup.object({
              price: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
              type: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
              year: Yup.string()
                .max(1000, 'Must be 4 characters ')
                .required('Required'),
              fuel: Yup.number()
                .max(10000, 'Must be 4 characters')
                .required('Required')
              , description: Yup.string()
                .max(40, 'Must be 40 characters or less')
                .required('Required'),
              color: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required')
              ,
              interiorColor: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
              image: Yup.string()
                .required('Required')
              ,
              name: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                console.log(values);
                fetch(`http://localhost:3000/cars/`, {
                  method: 'POST',
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `${token}`
                  },
                  body: JSON.stringify(values)
                })
                  .then(() => {
                    firstFetch()
                    setCreateState(null)
                  })
                setSubmitting(false);

                resetForm();
              }, 400);
            }}
          >
            <Form>
              <label htmlFor="price">Price</label>
              <Field name="price" type="number" />
              <div className="error">
                <ErrorMessage name="price" />
              </div>

              <label htmlFor="type">Type</label>
              <Field name="type" type="text" />
              <div className="error">
                <ErrorMessage name="type" />
              </div>

              <label htmlFor="year">Year</label>
              <Field name="year" type="number" />
              <div className="error">
                <ErrorMessage name="year" />
              </div>

              <label htmlFor="fuel">Fuel</label>
              <Field name="fuel" type="number" />
              <div className="error">
                <ErrorMessage name="fuel" />
              </div>

              <label htmlFor="description">Description</label>
              <Field name="description" type="text" />
              <div className="error">
                <ErrorMessage name="description" />
              </div>

              <label htmlFor="color">Color</label>
              <Field name="color" type="text" />
              <div className="error">
                <ErrorMessage name="color" />
              </div>

              <label htmlFor="interiorColor">Interior Color</label>
              <Field name="interiorColor" type="text" />
              <div className="error">
                <ErrorMessage name="interiorColor" />
              </div>

              <label htmlFor="image">Image</label>
              <Field name="image" type="text" />
              <div className="error">
                <ErrorMessage name="image" />
              </div>

              <label htmlFor="name">Name</label>
              <Field name="name" type="text" />
              <div className="error">
                <ErrorMessage name="name" />
              </div>

              <button type="submit">Submit</button>
            </Form>
          </Formik>
          <h4 onClick={() => setCreateState(null)}>Cancel create</h4>
          <br />
        </div> : null
      }
      <div className="userTextCont">
        <div className="text" >Create a new Car!</div>
        <div className="icon"><i className='fa-solid fa-square-plus' onClick={() => setCreateState(true)}></i></div>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Type</th>
          <th>Year</th>
          <th>Description</th>
          <th>Color</th>
          <th>Interior Color</th>
          <th>Fuel</th>
          <th>Image</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {carsData.map((x) => (
          <tr key={x._id}>
            <td>{x.name}</td>
            <td>${x.price}</td>
            <td>{x.type}</td>
            <td>{x.year}</td>
            <td>{x.description}</td>
            <td>{x.color}</td>
            <td>{x.interiorColor}</td>
            <td>{x.fuel}</td>
            <td><img src={x.image[0]} alt="" /></td>
            <td><i className='fa-solid fa-edit' onClick={() => { setEditState(x._id); window.scrollTo({ top: 19, left: 0, behavior: 'smooth' }) }}></i></td>
            <td><i className='fa-solid fa-x' onClick={() => deleteCar(x._id)}></i></td>
          </tr>))}
      </table>

    </div >
  )
}

export default AdminCars