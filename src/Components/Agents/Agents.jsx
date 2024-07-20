import React from 'react'
import { agents } from '../../data'
import './Agents.css'

const Agents = () => {
  return (
    <div>
      <div className="agent-section">
        <h1>Meet Our Agents</h1>
        <p>Meet our agents that makes buying and selling propertieseasy and stress free</p>
        <div className="agent">
          {agents.map((member, index) => (
            <div key={index} className="agent-member">
              <img src={member.img} alt="agent-img" />
              <h3>{member.name} </h3>
              <p>{member.role} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Agents