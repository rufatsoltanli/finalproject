import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import LayoutProvider from "./Layout"
import CarsPage from "./Pages/CarsPage"
import NewsPage from "./Pages/NewsPage"
import ProfilePage from "./Pages/ProfilePage"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import AboutUsPage from "./Pages/AboutUsPage"
import DetailPage from "./Pages/DetailPage"
import PrivateRoute from "./Routes/PrivateRoute"
import AdminPage from "./Pages/AdminPage"
import AdminRoute from "./Routes/AdminRoute"
import { useContext, useEffect } from "react"
import { JWTContext } from "./Context/JwtContext"
import AdminCars from "./Pages/AdminCars"
import AdminBooking from "./Pages/AdminBooking"
import AdminUser from "./Pages/AdminUser"

function App() {
  const { checkToken } = useContext(JWTContext)
  useEffect(() => {
    checkToken()
  }, [])

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route element={<LayoutProvider />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutUsPage/" element={<AboutUsPage />} />
            <Route path="/newsPage/" element={<NewsPage />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/registerPage" element={<RegisterPage />} />
            <Route path="/carsPage/" element={<CarsPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/profilePage/" element={<ProfilePage />} />
              <Route path="/detailPage/:id" element={<DetailPage />} />
            </Route>
            <Route element={<AdminRoute />}>
              <Route path="/adminPage/" element={<AdminPage />} />
              <Route path="/adminPage/cars" element={<AdminCars />} />
              <Route path="/adminPage/users" element={<AdminUser />} />
              <Route path="/adminPage/bookings" element={<AdminBooking />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
