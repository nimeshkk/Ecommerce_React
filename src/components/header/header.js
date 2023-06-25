import React from 'react'
import './headerCss.css'
import Logo from '../../assets/img/(11).png'
import {FiShoppingCart} from 'react-icons/fi'

export default function header1() {
  return (
    <div className="container">

        <div className="logo">
            <img src={Logo}></img>
            <span>OrderSite</span>

        </div>

        <div className="right">

            <div className="menu">
                <ul className="menu">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>

           <input type="text" className="search" placeholder='search'></input>
           <FiShoppingCart className="cart"/>
        </div>
      
    </div>
  )
}

