import React from 'react'
import './HomeDetails.css'
//import params
import { useParams } from 'react-router-dom'
//import property data
import { properties } from '../../data'
import { BiBath, BiBed } from 'react-icons/bi';
import { FaLandmark } from 'react-icons/fa';

const HomeDetails = () => {
  const { id }= useParams();

  //get home details based on id
  const home = properties.find(home => {
    return home.id === parseInt(id);
  })

  return (
    <div>
      <div className="property_detail">
        <div className="property_name_price">
          <h2>{home.name} </h2>
          <p>{home.price} </p>
        </div>
        <h3 className="location">{home.location} </h3>
        <hr />
        <div className="service">
          <p><BiBed /> {home.beds} Bedrooms </p>
          <p><BiBath /> {home.baths} Bathrooms </p>
          <p><FaLandmark /> {home.propertyDetails.landsize} </p>
        </div>
        <hr />
        <img src={home.image} alt="property-img" className='property-img'/>
        <h2 className="desc_header">Property Description</h2>
        <div className="features">
          <div className="feature">
            <p>PROPERTY TYPE</p>
            <h4>Condominiums</h4>
          </div>
          <div className="feature">
            <p>STATUS</p>
            <h4>Available</h4>
          </div>
          <div className="feature">
            <p>YEAR BUILT</p>
            <h4>2022</h4>
          </div>
          <div className="feature">
            <p>PROPERTY ID</p>
            <h4>CRFT8Y16R</h4>
          </div>
        </div>
        <hr />
        <p className="desc">{home.propertyDetails.description} </p>
        <p className="desc">{home.propertyDetails.description} </p>
        <p className="desc">{home.propertyDetails.description} </p>
        <p className="desc">{home.propertyDetails.description} </p>
      </div>
      <div className="agent">
        <h2>Contact Agent</h2>
        <div className="agent_details">
          <div className="left">
            <img src={home.propertyDetails.agentImage} alt="" />
            <h3>{home.propertyDetails.agentName} </h3>
            <h3>{home.propertyDetails.agentPhone} </h3>
            <h3>{home.propertyDetails.agentEmail} </h3>
          </div>
          <div className="right">
            <div className="contact-form">
              <p>Please fill this form properly</p>
              <form action="#">
                <h2>Contact Us</h2>
                <div>
                  <label htmlFor="firstName"> Full Name *</label>
                  <div className="names">
                    <input type="text" placeholder='First Name'/>
                    <input type="text" placeholder='Last Name'/>
                  </div>
                </div>
                <div>
                  <label htmlFor="email">E-mail *</label>
                  <input type="email" placeholder='example@example.com' />
                </div>
                <div>
                  <label htmlFor="#"> Message *</label>
                  <textarea name="message" id="message"></textarea>
                </div>
                <button type='submit'> Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDetails