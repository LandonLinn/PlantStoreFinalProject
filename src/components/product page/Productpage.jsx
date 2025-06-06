import React from "react";
import "./Productpage.css";
import Header from "../header/Header";
import { CartContext } from "../../Utils/CartContext";
import { useContext } from 'react';

// Import Product Data
import { plants } from '../../Utils/plantData';

const Productpage = ({onCartClick}) => {

    const { cartCount, dispatch } = useContext(CartContext);

    return(
        <div className="product-page-container">
            <Header cartCount={cartCount} onCartClick={onCartClick}/>
            <h1 className="product-page-title">Air Purifying Plants</h1>
            <div className="product-listings-container">
                
                {plants.map((plant, index) => (
                    <div className="product-card" key={index}>
                        <div className="sale-container">
                            <p>SALE</p>
                        </div>
                        <h3>{plant.name}</h3>
                        <img 
                            src={plant.img} 
                            alt={plant.name} 
                            className="product-img"
                        />
                        <p className="price">${plant.price}</p>
                        <em>{plant.desc}</em>
                        <button 
                            onClick={() => dispatch({ type: 'ADD_TO_CART' })}
                            className="cart-button"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
                    
                

            </div>
        </div>
    )
}

export default Productpage;