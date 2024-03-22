import '@/styles/sidebar.css'

import { SlHome } from "react-icons/sl"
import { SlUser } from "react-icons/sl"
import { SlPeople } from "react-icons/sl"
import { SlBasket } from "react-icons/sl"
import { SlBookOpen } from "react-icons/sl"
import { SlDocs } from "react-icons/sl"
import { SlGrid } from "react-icons/sl"
import { SlNotebook } from "react-icons/sl"
import { SlLayers } from "react-icons/sl"
import { SlCalender } from "react-icons/sl"
import { SlWrench } from "react-icons/sl";
import { SlDrawer } from "react-icons/sl"
import { SlChart } from "react-icons/sl"
import { SlDoc } from "react-icons/sl"
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div
      className='sidebar-content'
    >

      <div
        className='sidebar-section'
      >
        <div>
          <h5 className='sidebar-item-header'>Main</h5>
        </div>
        <div className='sidebar-section-item'>
          <Link to="/" className='sidebar-section-item-link'>
            <SlHome /> <span>Home</span>
          </Link>
        </div>
        <div className='sidebar-section-item'>
          <Link to="/users/1" className='sidebar-section-item-link'>
            <SlUser /> <span>Profile</span>
          </Link>
        </div>
      </div>

      <div
        className='sidebar-section'
      >
        <div>
          <h5 className='sidebar-item-header'>Lists</h5>
        </div>
        <div className='sidebar-section-item'>
          <Link to="/users" className='sidebar-section-item-link'>
            <SlPeople /> <span>Users</span>
          </Link>
        </div>
        <div className='sidebar-section-item'>
          <Link to="/products" className='sidebar-section-item-link'>
            <SlBasket /> <span>Products</span>
          </Link>
        </div>
        <div className='sidebar-section-item'>
          <SlBookOpen /> <span>Orders</span>
        </div>
        <div className='sidebar-section-item'>
          <SlDocs /> <span>Posts</span>
        </div>
      </div>

      <div
        className='sidebar-section'
      >
        <div>
          <h5 className='sidebar-item-header'>General</h5>
        </div>
        <div className='sidebar-section-item'>
          <SlGrid /> <span>Elements</span>
        </div>
        <div className='sidebar-section-item'>
          <SlNotebook /> <span>Notes</span>
        </div>
        <div className='sidebar-section-item'>
          <SlLayers /> <span>Forms</span>
        </div>
        <div className='sidebar-section-item'>
          <SlCalender /> <span>Calendar</span>
        </div>
      </div>

      <div
        className='sidebar-section'
      >
        <div>
          <h5 className='sidebar-item-header'>Maintenance</h5>
        </div>
        <div className='sidebar-section-item'>
          <SlWrench /> <span>Settings</span>
        </div>
        <div className='sidebar-section-item'>
          <SlDrawer /> <span>Backups</span>
        </div>
      </div>

      <div
        className='sidebar-section'
      >
        <div>
          <h5 className='sidebar-item-header'>Analytics</h5>
        </div>
        <div className='sidebar-section-item'>
          <SlChart /> <span>Charts</span>
        </div>
        <div className='sidebar-section-item'>
          <SlDoc /> <span>Logs</span>
        </div>
      </div>

    </div>
  )
}

export default Sidebar