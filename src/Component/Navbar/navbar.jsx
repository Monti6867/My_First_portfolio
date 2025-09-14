import React from 'react'
import './navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Monti</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyle: 'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li className='h1'>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                    <li className='h1'>Services</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}>                       
                    <li className='h1'>Experience</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>                       
                    <li className='h1'>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true}>                       
                    <li className='h1'>Testimonials</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true}> 
            <button className="button n-button">
                Contact
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar