import React from 'react'
import './homeCss.css';
import ShopPng from '../../assets/img/(12).png'


export default function home() {
  return (
    <div className="h_container">

             {/* left */}

        <div className="h_sides">
            <span className="h_text1">aaaaaaahbhvhv</span>

            <div className="h_text2">
                <span>sssssssssssss</span>
                
            </div>
        </div>
             {/* middle */}

        <div className="h_wrapper">
            <img src={ShopPng}></img>
            </div> 


            {/* right     */}
        <div className="h_sides">
            <div className="t3">
            <span>aaaaaaa hbhvhv</span>
            
            </div>
            <div className="t4">
            <span>aaaaaaa hbhvhv</span>
            
            </div>
            


        </div>
      
    </div>
  )
}