import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import HomeDetails from './pages/HomeDetails/HomeDetails'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Homepage />} />
        <Route path='/home/:id' element= {<HomeDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App