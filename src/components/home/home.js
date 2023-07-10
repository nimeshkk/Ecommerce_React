import React from 'react'
import './homeCss.css';
import ShopPng from '../../assets/img/white-coat-jacket-big-black-hat.jpg'


export default function home() {
  return (
    <div className="h_container">

             {/* left */}

        <div className="h_sides">
            {/* <span className="h_text1">aaaaaaahbhvhv</span> */}

            <div className="h_text2">
                <span>The Fashion Hut</span>
                
            </div>
        </div>
             {/* middle */}

        <div className="h_wrapper">
            <img src={ShopPng}></img>
            </div> 


            {/* right     */}
        {/* <div className="h_sides2">
            <div className="t3">
            <span>our extensive collection of clothing, accessories, and footwear for men, women, and children, we aim to cater to diverse tastes and preferences.</span>
            
            </div>
            <div className="t4"> */}
            {/* <span>aaaaaaa 1hbhvhv</span> */}
            
            {/* </div> */}
            


        {/* </div> */}
      
    </div>
  )
}
