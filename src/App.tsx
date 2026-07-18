import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Cart from './Pages/Cart'
import NavMin from './Components/Navbar/NavMin'
import ShippingDetails from './Pages/ShippingDetails'
import Footer from './Components/Footer/Footer'
import OrderSummary from './Pages/OrderSummary'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path='/' element={[<Navbar />, <LandingPage />, <Footer />]} />

                    <Route path='/Cart' element={[<Navbar />, <Cart />, <Footer />]} />

                    <Route path='/ShippingDetails' element={[<NavMin />, <ShippingDetails />, <Footer />]} />

                    <Route path='/OrderSummary' element={[<NavMin />, <OrderSummary />, <Footer />]} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
