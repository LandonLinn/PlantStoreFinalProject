import './Header.css';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Utils/CartContext';

import Cartpage from '../cart/Cartpage';


// Import Functions
import { toTop } from '../../Utils/utils';

// Import image
import logo from '../../assets/ppn-logo.png';
import cart from '../../assets/shopping-cart.png';

const Header = () => {

    const {cartCount, dispatch} = useContext(CartContext);
    const [showCart, setShowCart] = useState(false);

    return(
        <header>
            <div className='header-content'>
                    <div className='info'>
                        <Link to='/' className='full-logo' onClick={toTop}>
                            <img src={logo} className='logo' alt="Paradise Nursery Logo" />
                            <div>
                                <h2>Paradise Nursery</h2>
                                <p><em>Where Green Meets Serenity</em></p>
                            </div>
                        </Link>
                        <h1 className='section-header'>Plants</h1>
                    </div>
                

                <div className="shopping-cart" onClick={() => setShowCart(true)}>
                    <img src={cart} className="cart-icon" alt="Cart icon" />
                    <div className='cart-counter'>
                        <p>{cartCount}</p>
                    </div>
                </div>
            </div>

            {showCart && <Cartpage onClose={() => setShowCart(false)} />}
        </header>
    )   
}

export default Header;