import Header from '../header/Header';
import './Cartpage.css';
import { useContext } from 'react';
import { CartContext } from '../../Utils/CartContext';

const Cartpage = ({onClose}) => {
    const { cartItems, cartCount } = useContext(CartContext);
    return(
       
    <div className="cart-container">
        <div className="cart-content">
            {cartItems.length === 0 ? (
                <div>
                    <h1>Cart is Empty</h1>
                </div>
        
            ) : (
                cartItems.map((item, index) => (
                    <div key={index} className='cart-items-container'>
                        <div className='cart-item'>
                            <img src={item.img} alt={item.name} className='cart-item-img'/>
                        </div>
                        <div className='cart-item item-info'>
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                            <div className='increment'>
                                <button>-</button>
                                <button>+</button>
                            </div>
                            <p><strong>Total: ${item.price}</strong></p>
                            <button className='delete-button' onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>Delete</button>
                        </div>
                    </div>
                ))
            )}
            <div className='cart-buttons-container'>
                <button onClick={onClose} className="cart-button">Continue Shopping</button>
                <button className="cart-button">Checkout</button>
            </div>
        </div>
    </div>
        
    )
}

export default Cartpage;