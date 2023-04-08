import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirtData = useLoaderData()
    return (
        <div>
            <h4>these are total tshirt: {tshirtData.length}</h4>            
        </div>
    );
};

export default Home;