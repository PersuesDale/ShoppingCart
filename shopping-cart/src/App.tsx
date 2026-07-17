import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* landing page/products page */}
          <Route path='/' element={[<Navbar/>, <LandingPage />]} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
