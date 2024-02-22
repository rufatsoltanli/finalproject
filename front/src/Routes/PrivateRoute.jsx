import React, { useContext } from 'react'
import { JWTContext } from '../Context/JwtContext'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute() {

  const { token, addToken, decodedToken } = useContext(JWTContext)


  if (decodedToken !== null) {
    return decodedToken ? (
      <Outlet />
    ) : (
      <Navigate to={"/"} />
    )
  }
}

export default PrivateRoute