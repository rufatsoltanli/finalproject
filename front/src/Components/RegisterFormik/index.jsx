import React, { useContext } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./style.scss"
import { JWTContext } from '../../Context/JwtContext';
import { useNavigate } from 'react-router-dom';

function RegisterFormik() {
    const { token, addToken, decodedToken, logOut } = useContext(JWTContext)
    const navigate = useNavigate()
    return (
        <div className='registerFormik'>
            <Formik
                initialValues={{ email: '', username: '', password: '', phone: '' }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    username: Yup.string()
                        .max(20, 'Must be 20 characters or less')
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
                        fetch("http://localhost:3000/register/",
                            {
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                    'Authorization': `${decodedToken}`
                                },
                                method: "POST",
                                body: JSON.stringify(values)
                            })
                            .then(res => res.json())
                            .then(data => {
                                navigate("/")
                            })
                            .catch(data => alert(data))
                        setSubmitting(false);
                        resetForm();
                    }, 400);
                }}
            >
                <Form>
                    <label htmlFor="email">Your E-mail </label>
                    <Field name="email" type="email" />
                    <div className="error">
                        <ErrorMessage name="email" />
                    </div>

                    <label htmlFor="username">Your Username </label>
                    <Field name="username" type="username" />
                    <div className="error">
                        <ErrorMessage name="username" />
                    </div>

                    <label htmlFor="password">Your Password </label>
                    <Field name="password" type="password" />
                    <div className="error">
                        <ErrorMessage name="password" />
                    </div>

                    <label htmlFor="phone">Your phone </label>
                    <Field name="phone" type="phone" />
                    <div className="error">
                        <ErrorMessage name="phone" />
                    </div>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div >
    )
}

export default RegisterFormik