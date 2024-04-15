import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"
import { JWTContext } from '../../Context/JwtContext'
import { NavLink } from 'react-router-dom'

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function AdminUser() {

  const [usersData, setUsersData] = useState([])

  const [editState, setEditState] = useState(null)

  const [createState, setCreateState] = useState(false)

  const { token, addToken, decodedToken, logOut } = useContext(JWTContext)

  function firstFetch(params) {
    fetch('http://localhost:3000/users/', {
      headers: {
        "Authorization": `${token}`
      }
    })
      .then(res => res.json())
      .then(data => setUsersData(data))
  }
  // firstFetch()
  useEffect(() => {
    firstFetch()
  }, [])


  function deleteUser(id) {
    fetch('http://localhost:3000/users/' + id, {
      method: 'DELETE',
      headers: {
        "Authorization": `${token}`
      }
    })
      .then(res => res.text()) // or res.json()
      .then(res => { 
        firstFetch()
        console.log(res) })
  }




  return (
    <div className='adminUser'>
      <div className="userTextCont">
        <div className="text" >Create a new User!</div>
        <div className="icon"><i className='fa-solid fa-square-plus' onClick={() => setCreateState(true)}></i></div>
      </div>
      <table>

        <tr>
          <th>Username</th>
          <th>E-Mail</th>
          <th>Phone</th>
          <th>Role</th>
          <th>Edit user</th>
          <th>Delete</th>
        </tr>
        {usersData.map((x) => (
          <tr key={x._id}>
            <td>{x.username}</td>
            <td>{x.email}</td>
            <td>{x.phone}</td>
            <td>{x.role}</td>
            <td><i className='fa-solid fa-edit' onClick={() => setEditState(x._id)}></i></td>
            <td><i className='fa-solid fa-x' onClick={() => deleteUser(x._id)}></i></td>
          </tr>))}
      </table>

      {editState ? <div className="editUser">
        <h2>Edit User</h2>
        <Formik
          initialValues={{ email: '', username: '', role: '', phone: '' }}
          validationSchema={Yup.object({
            email: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            username: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            role: Yup.string()
              .max(8, 'Must be 8 characters or less')
              .required('Required'),
            phone: Yup.number()
              .min(10000000, 'Must be 8 characters or more')
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              fetch(`http://localhost:3000/users/${editState}`, {
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
            <label htmlFor="username"> Username </label>
            <Field name="username" type="username" />
            <div className="error">
              <ErrorMessage name="username" />
            </div>

            <label htmlFor="email"> E-mail </label>
            <Field name="email" type="email" />
            <div className="error">
              <ErrorMessage name="email" />
            </div>

            <label htmlFor="phone"> Phone </label>
            <Field name="phone" type="phone" />
            <div className="error">
              <ErrorMessage name="phone" />
            </div>

            <label htmlFor="role">Role </label>
            <Field name="role" type="role" />
            <div className="error">
              <ErrorMessage name="role" />
            </div>


            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <h4 onClick={() => setEditState(null)}>Cancel editing</h4>
        <br />
      </div> : null}
      {createState ? <div className="createUser">
        <h2>Create User</h2>
        <Formik
          initialValues={{ email: '', username: '', role: '', phone: '', password: '' }}
          validationSchema={Yup.object({
            email: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            username: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            role: Yup.string()
              .max(8, 'Must be 8 characters or less')
              .required('Required'),
            password: Yup.string()
              .min(8, 'Must be 8 characters or more')
              .required('Required'),
            phone: Yup.number()
              .min(10000000, 'Must be 8 characters or more')
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              fetch(`http://localhost:3000/users/`, {
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
            <label htmlFor="username"> Username </label>
            <Field name="username" type="username" />
            <div className="error">
              <ErrorMessage name="username" />
            </div>

            <label htmlFor="email"> E-mail </label>
            <Field name="email" type="email" />
            <div className="error">
              <ErrorMessage name="email" />
            </div>

            <label htmlFor="phone"> Phone </label>
            <Field name="phone" type="phone" />
            <div className="error">
              <ErrorMessage name="phone" />
            </div>

            <label htmlFor="password">Password </label>
            <Field name="password" type="password" />
            <div className="error">
              <ErrorMessage name="password" />
            </div>

            <label htmlFor="role">Role </label>
            <Field name="role" type="role" />
            <div className="error">
              <ErrorMessage name="role" />
            </div>


            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <h4 onClick={() => setCreateState(false)}>Cancel creating</h4>
        <br />
      </div> : null}
    </div>
  )
}

export default AdminUser