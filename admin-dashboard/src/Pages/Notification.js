import React from 'react'
import Sortt from '../Components/Assets/Icon/sortt.png'

const Notification = () => {
  return (
    <>
    <div className=''>
    <div className="filter flex justify-between">
      <div className='flex'>
        <p>Sort</p>
        <img src={Sortt} alt=''/>
      </div>
            <form onsubmit="event.preventDefault();" role="search">
  <input id="search" type="search" placeholder="Search..." />
  <button type="submit">Go</button>    
</form>
            </div>
    </div>
    </>
  )
}

export default Notification