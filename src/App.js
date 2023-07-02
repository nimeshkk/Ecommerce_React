import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import Slider from './components/slider/slider';
import Navbar from './components/nav/nav'
import Swap from './components/swap/swap'
import Product from './components/product/product'



function App() {
  return (
    <div >
      {/* <Header/> */}
      <Navbar/>
      <Home/>
      <Slider/>
      <Swap/>
      <Product/>
      
      
      
      
    </div>
  );
}

export default App;
