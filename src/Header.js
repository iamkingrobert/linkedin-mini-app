import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>
<div className='header__left'>
<img src='https://www.svgrepo.com/download/75820/linkedin.svg' alt='LinkedIn Logo'/>

<div className='header__search'>
<SearchIcon/>
<input type='text'/>
</div>
</div>

<div className='header__right'>
<HeaderOption Icon={HomeIcon} title='Home'/>
<HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
<HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
<HeaderOption Icon={ChatIcon} title='Messaging'/>
<HeaderOption Icon={NotificationsIcon} title='Notifications'/>
<HeaderOption avatar='https://media.licdn.com/dms/image/D4E03AQEbdJSqWpO6FA/profile-displayphoto-shrink_400_400/0/1679312986157?e=1684972800&v=beta&t=i9Wz2j7g47r6WHOUs6JyROy6TYDb_DrpFGz_sAf33Oc' title='Me' />


</div>

    </div>
  )
}

export default Header