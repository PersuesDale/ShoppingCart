import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import './App.css'
import LandingNav from './Components/Navbar/LandingNav'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* landing page/products page */}
          <Route path='/' element={[<LandingNav/>, <LandingPage />]} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
