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

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route element={<LayoutProvider />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutUsPage/" element={<AboutUsPage />} />
            <Route path="/carsPage/" element={<CarsPage />} />
            <Route path="/newsPage/" element={<NewsPage />} />
            <Route path="/profilePage/" element={<ProfilePage />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/registerPage" element={<RegisterPage />} />
            <Route path="/detailPage/:id" element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
