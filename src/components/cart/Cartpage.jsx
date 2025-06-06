import Header from '../header/Header';
import './Cartpage.css';
import { useContext } from 'react';
import { CartContext } from '../../Utils/CartContext';

const Cartpage = ({onClose}) => {
    const { cartItems, cartCount } = useContext(CartContext);
    return(
       
    <div className="cart-overlay">
        <div className="cart-content">
            <button onClick={onClose} className="close-cart">×</button>
            <h2>Your Cart ({cartCount} items)</h2>
        </div>
    </div>
        
    )
}

export default Cartpage;