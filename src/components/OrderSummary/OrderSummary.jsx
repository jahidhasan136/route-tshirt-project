import React from 'react';

const OrderSummary = ({ cart, handleDeletCart }) => {
    return (
        <div>
            <h4>Order Summary: {cart.length}</h4>
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