import React from 'react'
import './productCss.css'
import Menu from "./menu"


export default function product() {
  return (
    <div className='p_container'>
    <div className='p_header'>
      <h1>feature</h1>
      </div>
      <hr></hr>
      <div className='p_tabCenter'>
        <div className='p_itemsName'>
            <button className='btn-all'>All</button>
            <button className='btn-kids'>Kids</button>
            <button className='btn-gents'>Gents</button>
            <button className='btn-ladies'>Ladies</button>
        </div>
      </div>
    </div>
  )
}

