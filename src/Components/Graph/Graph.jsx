import React from 'react'
import {  Legend, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Line } from 'recharts'
import "./Graph.css"
import Trade from '../Trade/Trade'

const Graph = ({ formattedData, activeTab }) => {
    console.log()
  return (
    <>
    <div className="chart__container">
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={formattedData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        
        <XAxis dataKey="time" />
        <YAxis domain={['dataMin', 'dataMax']} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" name={`Price (Past ${activeTab.label}) in INR`} stroke="#EEBC1D" strokeWidth={2} dot={false} isAnimationActive={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
    <Trade />
    </>
  )
}

export default Graph
