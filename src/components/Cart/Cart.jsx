import React from 'react';
import './Cart.css'

const Cart = ({ tshirt, handleAddToCart }) => {
    const { _id, name, picture, price } = tshirt
    return (
        <div className='cart-container'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Cart;