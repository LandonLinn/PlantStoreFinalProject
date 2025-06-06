import './App.css'
import { useContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartContext } from './Utils/CartContext';

// Import Components
import Homepage from './components/homepage/Homepage';
import Productpage from './components/product page/Productpage';
import Cartpage from './components/cart/Cartpage';

function App() {

  const { cartCount } = useContext(CartContext);
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/products' element={<Productpage cartCount={cartCount} />}/>
      </Routes>

    </Router>
  )
}

export default App
