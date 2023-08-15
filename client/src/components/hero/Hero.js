import React from 'react'
import './Hero.scss'
import { useNavigate } from 'react-router'

function Hero() {
  const navigate=useNavigate();
  return (
    <div className='Hero'>
        <div className="hero-content center">
            <h2 className="heading">Exclusive Print And ArtWorks</h2>
            <p className="subheading">Exclusive Art Pices, for the Exclusive You.</p>
            <button onClick={()=>navigate('/category')} className="cta btn-primary">Explore More</button>
        </div>
    </div>
  )
}

export default Hero