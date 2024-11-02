// src/App.js
import React from 'react';
import Calculator from './components/calculator';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Calculator />
            <Footer/>
        </div>
    );
}

export default App;
