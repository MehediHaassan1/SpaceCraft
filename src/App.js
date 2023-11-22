import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';

const App = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Header></Header>
        </div>
    );
};

export default App;