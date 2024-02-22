import React, { useContext } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./style.scss"
import { JWTContext } from '../../Context/JwtContext';
import { jwtDecode } from 'jwt-decode';

function BookingFormik({ carName, username }) {
    const { token, addToken, decodedToken, logOut } = useContext(JWTContext)


    return (
        <div className='bookingFormik'>
            <Formik
                initialValues={{ pickUpLocation: '', dropOffLocation: '', day: '' }}
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
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        values = { ...values, chosenCarName: carName }
                        values = { ...values, bookerUsername: username }
                        console.log(values);
                        fetch("http://localhost:3000/booking/",
                            {
                                method: "POST",
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                    'Authorization': `${token}`
                                },
                                body: JSON.stringify(values)
                            })
                            .then(function (res) { console.log(res) })
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

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div >
    )
}

export default BookingFormik