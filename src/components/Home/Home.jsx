import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Home.css'
import OrderSummary from '../OrderSummary/OrderSummary';

const Home = () => {
    const tshirtData = useLoaderData()
    const [cart, setCart] = useState([])

    const handleAddToCart = tshirt => {
        const newCart = [...cart, tshirt]
        setCart(newCart)
    }

    const handleDeletCart = id => {
        const deletCart = cart.filter(ts => ts._id !== id)
        setCart(deletCart)
    }
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tshirtData.map(tshirt => <Cart key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></Cart>)
                }
            </div>
            <div>
                <OrderSummary cart={cart} handleDeletCart={handleDeletCart}></OrderSummary>    
            </div>            
        </div>
    );
};

export default Home;