import React from 'react'
import { FaWallet, FaCompass, FaRegBell } from "react-icons/fa6"
import { RiSettings5Fill } from "react-icons/ri"
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <FaWallet className='footer__icons'/>
        <FaCompass className='footer__icons'/>
        <FaRegBell className='footer__icons'/>
        <RiSettings5Fill className='footer__icons'/>
    </div>
  )
}

export default Footer
