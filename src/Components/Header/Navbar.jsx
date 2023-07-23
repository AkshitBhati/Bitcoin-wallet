import { useState } from 'react'
import { FaEllipsisVertical, FaChevronLeft } from 'react-icons/fa6';
import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="nav__container">
        <div className="nav__menu">
          <FaChevronLeft />
        </div>
       <h1>Bitcoin Wallet</h1>
        <div className="nav__menu--icon" onClick={handleShowNavbar}>
          <FaEllipsisVertical />
        </div>
        <div className={`nav__elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              Home
            </li>
            <li>
             Blog
            </li>
            <li>
             Projects
            </li>
            <li>
             About
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
