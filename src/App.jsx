import { useState } from 'react'
import './App.css'

//Import Components
import Landingpage from './components/landing page/Landingpage'
import Productpage from './components/product page/Productpage'

function App() {
  return (
    <>
      <Landingpage />
      <Productpage />
    </>
  )
}

export default App
