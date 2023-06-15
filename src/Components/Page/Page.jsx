import React from 'react'
import './page.css'
import Dropdown from 'react-bootstrap/Dropdown';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import save from './save-money.png'
import spend from './spending.png'
import balance from './wallet-filled-money-tool.png'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import user from './user-img.jpg'
import user3 from './user3.avif'
import { BarChart, Bar } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page D",
    uv: 2280,
    pv: 3808,
    amt: 2000,
  },
  {
    name: "Page D",
    uv: 2080,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page D",
    uv: 2980,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page D",
    uv: 2380,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page D",
    uv: 2380,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page D",
    uv: 2380,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page D",
    uv: 2380,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page D",
    uv: 2380,
    pv: 3908,
    amt: 2000,
  },
  
];
const Page =()=>{
  return (
    <div className='page'>
        <div className='page-head'>
          <h1>Dashboard</h1>
          <div className='pg-head-icons'>
            <input type='search' placeholder='&nbsp;&nbsp;Search'/>
            <span>
              <Dropdown>
              <Dropdown.Toggle variant="success"  className='ph-icon-space'>
              <NotificationsActiveRoundedIcon className='notification-icon'/>
              </Dropdown.Toggle>
              <Dropdown.Menu className='dd3-menu '>
              <Dropdown.Item href="#/action-1" className='dd3-items'><h4>Notification</h4></Dropdown.Item>
              <Dropdown.Item href="#/action-2" className='dd3-items'> Delivery Processing</Dropdown.Item>
              <Dropdown.Item href="#/action-3" className='dd3-items'>Order Completed</Dropdown.Item>
              <Dropdown.Item href="#/action-3" className='dd3-items'>Ticket Generated</Dropdown.Item>
              <Dropdown.Item href="#/action-3" className='dd3-items'><button className='all_notification'>See All Notification</button></Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
              </span>
            <span>
              <Dropdown>
              <Dropdown.Toggle variant="success"  className='ph-icon-space'>
              <MoreHorizOutlinedIcon className='ph-icon3'/>
              </Dropdown.Toggle>
              <Dropdown.Menu className='dd2-menu '>
              <Dropdown.Item href="#/action-1" className='dd2-items'>Setting</Dropdown.Item>
              <Dropdown.Item href="#/action-2" className='dd2-items'>Help</Dropdown.Item>
              <Dropdown.Item href="#/action-3" className='dd2-items'>Exit</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
              </span>
          </div>
        </div>
        <div className='page-body'>
          <div className='balance-box balance'>
            <div className='box-icon'><img src={balance}/> </div>
              
                <div className='more-icon'>
                  <Dropdown className='dd'>
                 <Dropdown.Toggle variant="success"  className='icon-space-tb' >
                 <MoreVertIcon className='moreVertIcon more-opt-balance' style={{color:'white'}}/>
                 </Dropdown.Toggle>
                <Dropdown.Menu className='dd-menu'>
                <Dropdown.Item href="#/action-1" className='dd-items'>Refresh</Dropdown.Item>
                <Dropdown.Item href="#/action-2" className='dd-items'>Setting</Dropdown.Item>
                <Dropdown.Item href="#/action-3" className='dd-items'>Edit</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                  </div><br/>
              
            
              <div className='info-box'>
              <span>Total Balance</span><br/>
              <h3 style={{color:'white'}}>PKR 200,000</h3>
           </div>
          </div>
          <div className='balance-box spending'>
          <div className='box-icon'><img src={spend}/></div>
          <div className='more-icon'>
          <Dropdown>
                 <Dropdown.Toggle variant="success" id="dropdown-basic" className='icon-space-tss' >
                 <MoreVertIcon className='moreVertIcon'/>
                 </Dropdown.Toggle>
                <Dropdown.Menu className='dd-menu'>
                <Dropdown.Item href="#/action-1" className='dd-items'>Refresh</Dropdown.Item>
                <Dropdown.Item href="#/action-2" className='dd-items'>Setting</Dropdown.Item>
                <Dropdown.Item href="#/action-3" className='dd-items'>Edit</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div><br/>
          <div className='info-box'>
            <span>Total Spending</span><br/>
            <h3>PKR 60,000</h3>
            </div>
          
          </div>
          <div className='balance-box saved'>
          <div className='box-icon'><img src={save}/></div>
          <div className='more-icon'>
          <Dropdown>
                 <Dropdown.Toggle variant="success" id="dropdown-basic" className='icon-space-tss' >
                 <MoreVertIcon className='moreVertIcon'/>
                 </Dropdown.Toggle>
                <Dropdown.Menu className='dd-menu'>
                <Dropdown.Item href="#/action-1" className='dd-items'>Refresh</Dropdown.Item>
                <Dropdown.Item href="#/action-2" className='dd-items'>Setting</Dropdown.Item>
                <Dropdown.Item href="#/action-3" className='dd-items'>Edit</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div><br/>
          <div className='info-box'>
          <span>Total Saving</span><br/>
          <h3>PKR 140,000</h3>
          </div>
          </div>
          <div className='activity-box'>
            <div className='activitybox-head'><h2>Activity</h2></div><br/>
            <div className='activity-box-horizontal-line'></div>
            <div className='div1'>
            <div className='div1-content'>
            <h3>PKR 13,550</h3>
            <span>Online Shop</span>
           </div>

        </div>
        <div className='div2'>
        <div className='div2-content'>
            <h3>PKR 5,550</h3>
            <span>Tax</span>
        </div>
        </div>
        <div className='div3'>
        <div className='div3-content'>
            <h3>PKR 550</h3>
            <span>Food</span>
        </div>
        </div>
        <div className='comparison-chart'>
          <h3>Camparison (Month)</h3><br/>
          <h4>This Month</h4><div className='main-this-month'></div><div className='this-month'></div><br/>
          <h4>Last Month</h4><div className='main-last-month'></div><div className='last-month'></div>
        </div>
        </div>
        <div className='bar-chart'>
          <div className='barchart-head'><h2>View</h2></div> 
          <div className='bar-chart-horizontal-line'></div>
          <br/>
          <div className='amount'>
            <h4>25K</h4><br/>
            <h4>20K</h4><br/>
            <h4>15K</h4><br/>
            <h4>5K</h4><br/>
            <h4>1K</h4>

          </div>
        <BarChart width={500} height={230} data={data} className='chart-container'>
        <Bar dataKey="uv" fill="red"/>
        <Bar dataKey="amt" stackId="a" fill="green" />
        <Bar dataKey="pv" fill="orange"/>
        </BarChart>
        <div className='months'>
        <p>
          <span>JAN</span>
          <span> FEB</span>
          <span> MAR</span> 
          <span>APR</span> 
          <span>MAY</span> 
          <span>JUN</span> 
          <span>JUL</span> 
          <span>AUG</span>
          <span>SEP</span>
          <span>OCT</span>
          <span>NOV</span>
          <span>DEC</span>
          </p>
        </div>
        </div>
        
    </div>
    <div className='transaction-history'> 
    <div className='transaction-head'><h2>Transaction History</h2></div><br/>
    <div className='transaction-horizontal-line'></div>
    <div></div>
        <div className='row1'>
          <img src={user3}/>
          <h3>David Johnson</h3>
          <h3>Online Payment</h3>
          <h3>11:30 AM</h3>
          <h3>PKR 12,000</h3>
          <button className='complete' >Complete</button>

        </div>
        <div className='row2'>
          <img src={user}/>
          <h3>Darwin Nunez</h3>
          <h3>Online Payment</h3>
          <h3>01:30 PM</h3>
          <h3>PKR 2,000</h3>
          <button className='pending' >Pending..</button>

        </div>


        </div>
    </div>
  )
}

export default Page