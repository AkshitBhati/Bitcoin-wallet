import React from 'react'
import { BsCurrencyDollar } from "react-icons/bs"
import "./Trade.css"
import Footer from '../Footer/Footer'
const Trade = () => {
  return (
    <>
    <div className='trade__wrapper'>
        <div className="trade__box">
            <div className="trade__dollar--buy">
                <BsCurrencyDollar className='trade__logo'/>
            </div>
            <h4>Buy BTC</h4>
        </div>

        <div className="trade__box">
            <div className="trade__dollar--sell">
                <BsCurrencyDollar className='trade__logo'/>
            </div>
            <h4>Sell BTC</h4>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Trade
