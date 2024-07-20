import React, {useState} from 'react'
import './Navbar.css'
import { TiTimes } from 'react-icons/ti';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {

    const [Mobile, setMobile] = useState(false);
  return (
    <div>
        <div className="navbar">
            <div className="nav_logo">
                <h2>ASH PROPERTY</h2>
            </div>
            <div className={Mobile ? "nav-link" : "link"} onClick={()=> setMobile(false)}>
                <ul>
                    <li>Home</li>
                    <li>Properties</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="btn">
                <button>Register</button>
            </div>
            <button className="toggle" onClick={()=> setMobile(!Mobile)}>
                {Mobile ? <TiTimes className='close'/> : <BiMenu className='open'/>}
            </button>
        </div>
    </div>
  )
}

export default Navbar