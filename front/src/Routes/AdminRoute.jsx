import React, { useContext } from 'react'
import { JWTContext } from '../Context/JwtContext'
import { Navigate, Outlet } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

function AdminRoute() {

  const { token, addToken, decodedToken, logOut } = useContext(JWTContext)



  if (decodedToken !== null) {
    return decodedToken.role === "Admin" ? (
      <Outlet />
    ) : (
      <Navigate to={"/"} />
    )
  }
}

export default AdminRoute