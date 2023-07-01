import React from 'react'
import './swapCss.css'
import ReactCompareImage from 'react-compare-image';

import imgL from '../../assets/img/pink-wall1.jpg'
import imgR from '../../assets/img/red-handbag2.jpg'

export default function swap() {
  return (
    <div className='s-swap'>
        <div className='s-left'>
            <span>111</span>
            <span>222</span>
            <span>333</span>
        </div>

        <div className='s-right'>
            <div className='s-wrapper'>
            <ReactCompareImage leftImage={imgL} rightImage={imgR} />
            </div>
         </div>
      
    </div>
  )
}
