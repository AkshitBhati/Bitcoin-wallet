import React, { useState, useEffect } from 'react';
import './Tabs.css';
import axios from 'axios';
import Graph from '../Graph/Graph';

const Tabs = () => {
  const tabsData = [
    { label: 'Day', days: 1 },
    { label: 'Week', days: 7 },
    { label: 'Month', days: 30 },
    { label: 'Year', days: 365 },
  ];

  const [activeTab, setActiveTab] = useState(tabsData[0]);
  const [coinPrices, setCoinPrices] = useState([]);

  const fetchData = async (days) => {
    try {
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=INR&days=${days}`);
      const data = res.data;
      setCoinPrices(data.prices);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(activeTab.days);
  }, [activeTab]);

  const formattedData = coinPrices.map((coin) => {
    const date = new Date(coin[0]);
    const time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;
    return { time: activeTab.days === 1 ? time : date.toLocaleDateString(), price: coin[1] };
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="tabs">
        {tabsData.map((tab) => (
          <div
            key={tab.label}
            className={`tabs__name ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab.label}
          </div>
        ))}
      </div>
     <Graph activeTab={activeTab} formattedData={formattedData}/>
    </>
  );
};

export default Tabs;
