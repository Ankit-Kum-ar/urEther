import React from 'react'
import SideBar from './components/SideBar'
import Statistics from './components/Statistics'
import Purchase from './components/Purchase'

const Dashboard = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <Statistics/>
      <Purchase/>
    </div>
  )
}

export default Dashboard
