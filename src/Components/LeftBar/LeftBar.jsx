import React from 'react'
import './leftbar.css'
import icon1 from './icon1.PNG'
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
import DonutSmallRoundedIcon from '@mui/icons-material/DonutSmallRounded';
import avatar from './user-img.jpg'
import logo from './toslogo-white.png'


const LeftBar = () => {
  return (
    <div className='Leftbar'>
        <div className='logo'>
            <img src={logo} />
        </div><br/>
        <div className='optionlist-1'>
            <h4>Navigation</h4>
            <ul>
                <li><DashboardRoundedIcon className='lb-icons' />&nbsp;&nbsp;<span>Dashboard</span></li>
                <li><DonutSmallRoundedIcon/>&nbsp;&nbsp; Analytics</li>
                <li><InsertChartRoundedIcon/> &nbsp;&nbsp;Performance</li>
                <li><NotificationsActiveRoundedIcon/>&nbsp;&nbsp;  Notification</li>
                <li><SettingsApplicationsRoundedIcon/> &nbsp;&nbsp; Settings</li>
                <li><GppGoodRoundedIcon/>  &nbsp;&nbsp;Security</li>
            </ul>
        </div>
        <div className='user-info'>
          <img src={avatar}/>
          <div className='name-job'>
          <span>John Doe</span><br/>
          <span style={{color:'#808080',fontSize:'15px'}}>Graphic Designer</span>
          </div>
        </div>

    </div>
  )
}

export default LeftBar