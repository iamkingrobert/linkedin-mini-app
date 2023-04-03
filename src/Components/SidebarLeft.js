import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarLeft.css'

const recentItem = (topic) => {
  return (
    <div className='sidebar__recentItem'>
    <span className='sidebar__hash'>#</span>
    <p>{topic}</p>
    </div>
  )
   
};

function SidebarLeft() {

  return (
    <div className='sidebar'>
    <div className='siderbar__top'>
    <img src='https://media.licdn.com/dms/image/C4D16AQETYypZeEO23g/profile-displaybackgroundimage-shrink_350_1400/0/1661415249303?e=1684972800&v=beta&t=Di9FR0Q9hxEok69dptcPv7zyKo3d24ewSJLvhVxRX4g' alt=''/>
    <Avatar className='siderbar__avatar'/>
    <h2>King Robert</h2>
    <h4>Robert@iamkingrobert.com</h4>
    </div>
    <div className='sidebar__stats'> 
    <div className='sidebar__stat'>
    <p>Who's Viewed You</p>
    <p className='sidebar__statNumber'>700</p>
    </div>
    <div className='sidebar__stat'>
    <p>Posts Impressions</p>
    <p className='sidebar__statNumber'>2,330</p>
     </div>
    </div>
    <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('Software')}
        {recentItem('ReactJS')}
        {recentItem('ReactNative')}
        {recentItem('Tailwindcss')}
        {recentItem('Developer')}
    </div>
    </div>
  )
}

export default SidebarLeft