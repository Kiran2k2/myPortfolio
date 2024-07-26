import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"
import About from './About'

function NavBar({links}) {
  return (
    <nav className='main-nav'>
      <h2>Kiran</h2>
        {links.map((link,id)=>{
            return (
                <NavLink key={id} to={`${link.toLowerCase()==="home" ? "/": link.toLowerCase()}`}>
                    {link}

                </NavLink>
            )
        })}
    </nav>
  
  )
}

export default NavBar