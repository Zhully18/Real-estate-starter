import React from 'react'
import './Home.css'

const Home = ({home}) => {

  const {name, price, location, beds, baths, image}= home;
  return (
    <div>
      <div className="property-card">
        <img src={image} alt="property-img" className='property-img'/>
        <div className="property-details">
          <h3>{name} </h3>
          <p>{price} </p>
          <p>{location} </p>
          <div className="property-info">
            <span>{beds} Beds </span>
            <span>{baths} Bath </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home