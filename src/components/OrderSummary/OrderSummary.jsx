import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({ cart, handleDeletCart }) => {
    let message;
    if(cart.length === 0){
        message = <small>please add product</small>
    }
    return (
        <div>
            <h4 className={cart.length === 0 ? 'red' : 'blue'}>Order Summary: {cart.length}</h4>
            {message}
            {
                cart.map(addCart => <p key={addCart._id}>
                    {addCart.name}
                    <button onClick={() => handleDeletCart(addCart._id)}>x</button>
                </p>)
            }
        </div>
    );
};

export default OrderSummary;