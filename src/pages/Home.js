import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/Home.css"
import BannerImage from '../assets/Soverein.png';

function Home() {
  return (
    <div className='home'>
      
      <div className='headerContainer' 
      style={{ backgroundImage: `url(${BannerImage})` }}>
        <div>
        <h1> SOVEREINCLOUD, the future</h1>
        <p> Cloud storage you can count on</p>
        <Link to ='/Signin'>
        <button>
          ORDER NOW
        </button>
        
        </Link>

        </div>
      </div>
    </div>
  )
}

export default Home
