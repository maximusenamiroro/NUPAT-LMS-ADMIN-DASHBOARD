import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto"

function BarCharts({chartData}) {
  return  <Bar data={chartData} width={700}
  height={300}/>; 
}

export default BarCharts