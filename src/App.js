import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Companies from './components/Companies';
import Deals from './components/Deals';

const App = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Header></Header>
            <Companies></Companies>
            <Deals></Deals>
        </div>
    );
};

export default App;