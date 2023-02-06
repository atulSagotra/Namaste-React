import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='header'>
      <Link to={'/'}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Atul_logo.png" width={'70px'} height={'50px'}/>
      </Link>

      <ul className="header-ul">
        <li><Link to={'/about'}>About Us</Link></li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
        <li>Help</li>
        <li>Account</li>
      </ul>
    </div>
  )
}
export default Header