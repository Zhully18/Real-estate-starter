import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div>
        <div className="hero-container">
            <div className="hero_overlay">
                <div className="hero_content">
                    <h1>Welcome to Ash-Estate, where your dream <br />
                    home becomes a reality.</h1>
                    <p>From cozy starter homes to luxurious estates, we offer a diverse range of properties to suit your unique lifestyle. Discover your dream home with Ash-Estate today.</p>
                    <div className="hero_button">
                        <button>Buy Property</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero