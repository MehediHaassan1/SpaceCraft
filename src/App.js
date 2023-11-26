import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Companies from './components/Companies';
import Deals from './components/Deals';
import About from './components/About';
import Product from './components/Product';

const App = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Header></Header>
            <Companies></Companies>
            <Deals></Deals>
            <About></About>
            <Product></Product>
        </div>
    );
};

export default App;