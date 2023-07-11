import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import Slider from './components/slider/slider';
import Navbar from './components/nav/nav'
import Swap from './components/swap/swap'
import Tabs from './components/product/product'
import TitlebarBelowImageList from './components/gallery/gallery'
import Footer from './components/footer/footer'
import NavigationBar from './components/nav/nav'


function App() {
  return (
    <div >
      {/* <Header/> */}
      <NavigationBar/>
      <Home/>
      <Slider/>
      <Swap/>
      <Tabs/>
      <TitlebarBelowImageList/>
      <Footer/>
      
     
    </div>
  );
}

export default App;
