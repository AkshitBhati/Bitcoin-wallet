import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Home.css";
import { FaChevronDown } from "react-icons/fa6"
import Tabs from '../Tabs/Tabs';


const Home = () => {
    const [coinData, setCoinData] = useState([])
    const [showToggleInfo, setShowToggleInfo] = useState(false)

    const fetchData = async () => {
        try {
            const res = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin");
            const data = res.data;
            setCoinData([data])
            console.log(data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
        
    const toggle = () => {
        setShowToggleInfo(!showToggleInfo)
    }

    return (
        <div className='home'>
            {
                coinData.map((coin) => {
                    const profit = coin.market_data.market_cap_change_percentage_24h
                    return (
                    <React.Fragment key={coin.id}>
                    {/*------------------------ Coin Symbol, Name and Image  -----------------------------------------*/}

                    <div className='coin'>
                        <div className='coin__details'>
                            <img src={coin.image.small} alt="coinLogo" className='coin__logo'/>
                            <h4 className='coin__name'>{coin.name}</h4>
                        </div>
                        <p>{coin.symbol.toUpperCase()}</p>
                    </div>

                    {/*------------------------ Coin Price and Percent  -----------------------------------------*/}

                    <div className="coin__performance">
                    <h2 className='coin__performance--price'>₹{numberWithCommas(coin?.market_data.current_price.inr)}</h2>
                    <p style={{backgroundColor:profit>0 ? "rgb(14,203,129)" : "rgb(231, 23, 103)"}}>{coin?.market_data.market_cap_change_percentage_24h?.toFixed(2)}%</p>
                    </div>

                    {/*------------------------ Toggle  -----------------------------------------*/}
                    
                    <div className="toggle__arrow">
                        <FaChevronDown onClick={toggle}/>
                    </div>

                    {/*------------------------ ToggleButtons  -----------------------------------------*/}

                        <div className={`${showToggleInfo ? "toggle__information--active" : "toggle__information"}`  }>
                            <button style={{backgroundColor:"rgb(14,203,129)"}} className={`${showToggleInfo ?"toggle__btn--active" : "toggle__btn" }`}>Buy</button>
                            <button style={{backgroundColor:"rgb(219, 39, 39)"}} className={`${showToggleInfo ?"toggle__btn--active" : "toggle__btn" }`}>Sell</button>
                        </div>
                        <Tabs />
                    </React.Fragment>
                )})
                    
            }
        </div>
    );
};

export default Home;
