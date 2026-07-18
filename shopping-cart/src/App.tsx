import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Cart from './Components/Cart'
import NavMin from './Components/Navbar/NavMin'
import ShippingDeets from './Components/ShippingDeets'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          {/* homepage */}
          <Route path='/' element={[<Navbar />, <LandingPage />, <Footer />]} />

          {/* view cart */}
          <Route path='/Cart' element={[<Navbar />, <Cart />, <Footer />]} />

          {/* shipping info */}
          <Route path='/ShippingDetails' element={[<NavMin />, <ShippingDeets />]} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
