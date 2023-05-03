import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto"

function BarChart({chartData}) {
  return  <Bar data={chartData} width={800}
  height={330}/>; 
}

export default BarChart
 