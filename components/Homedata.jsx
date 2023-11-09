import React from 'react'
import Home from './Home'
import mobile1 from '../assets/mobile.jpeg'
import gift1 from '../assets/gift.jpeg'
import kitchen1 from '../assets/kitchen.jpeg'
import deevali1 from '../assets/deevali.jpg'
export default function Homedata() {
  return (
    <div>
        <Home/>
        <img style={{width:"100%",
    maxHeight: "40rem",
    marginTop: "6rem"}} src={deevali1}/>
        <div className='mobile'>
            <img src={mobile1}/>
            <img style={{marginLeft:"4rem"}} src={gift1}/>
            <img  style={{marginLeft:"4rem"}} src={kitchen1}/>
        </div>
    </div>
  )
}
