import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import LayoutProvider from "./Layout"

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route element={<LayoutProvider />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
