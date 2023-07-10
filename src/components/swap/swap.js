import React from 'react'
import './swapCss.css'
import ReactCompareImage from 'react-compare-image';

import imgL from '../../assets/img/pink-wall1.jpg'
import imgR from '../../assets/img/red-handbag2.jpg'

export default function swap() {
  return (
    <div className='s-swap'>
        <div className='s-left'>
            <span>Fashion Hut Clothes</span>
            <span>Welcome to Fashion Hut Clothes, your ultimate destination for all things fashion! We are a premier online platform dedicated to bringing you the latest trends, styles, and high-quality clothing options.</span>
            <span> At Fashion Hut, we believe that fashion is a form of self-expression, and we are here to help you curate your unique style effortlessly.</span>
        </div>

        <div className='s-right'>
            <div className='s-wrapper'>
            <ReactCompareImage leftImage={imgL} rightImage={imgR} />
            </div>
         </div>
      
    </div>
  )
}
