import React, { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'

export const JWTContext = createContext()

function JwtContextProvider({ children }) {

    // const [token, setToken] = useState(Cookies.get("token") ? Cookies.get("token") : null)

    // console.log(Cookies.get("token"));

    // const [decodedToken, setDecodedToken] = useState(null)

    // function addToken(value) {
    //     setToken(value)
    //     Cookies.set('token', value, { expires: 1 })
    // }

    // useEffect(() => {
    //     (async (params) => {
    //         if (token) {
    //             console.log("iwleyir", token);
    //             const tokenIsDecoded = await jwtDecode(token)
    //             setDecodedToken(tokenIsDecoded)
    //         }
    //         console.log(decodedToken);
    //     })()
    // }, [token])

    // function logOut() {
    //     addToken(null)
    //     setDecodedToken(null)
    //     Cookies.remove('token')
    // }

    const [token, setToken] = useState(null);
    const [decodedToken, setDecodedToken] = useState(null);

    const addToken = async (data) => {
        try {
            const decode = jwtDecode(data);
            setDecodedToken(decode);
            setToken(data);
            Cookies.set("token", data, { expires: 1 });
        } catch (error) {
            console.log(error.message);
        }
    };

    const refreshToken = async (value) => {
        const decode = jwtDecode(value);
        setDecodedToken(decode);
        setToken(value);
    };

    const checkToken = () => {
        try {
            const token = Cookies.get("token");
            console.log(token);
            if (!!token) {
                refreshToken(token);
            }
            else{
                setToken(false)
                setDecodedToken(false)
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const logOut = () => {
        Cookies.set("token", "");
        setToken(null);
        setDecodedToken(null);
    };

    const data = { token, addToken, decodedToken, logOut, checkToken }

    return (
        <JWTContext.Provider value={data}>
            {children}
        </JWTContext.Provider>
    )
}

export default JwtContextProvider