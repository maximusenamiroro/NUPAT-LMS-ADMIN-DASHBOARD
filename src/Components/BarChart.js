import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto"

function BarChart({chartData}) {
  return   <div> 
    <div className='xs:hidden'>
     <Bar data={chartData} display="hidden" width={800}
  height={330}/>;

<div className='hidden xs:block w-11/12'>
     <Bar data={chartData}  width={800}
  height={330}/>;
   </div>
   </div>
  </div>
}

export default BarChart
 