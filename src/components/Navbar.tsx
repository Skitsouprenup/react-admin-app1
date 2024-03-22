import Brand from '@/assets/survey-papers-icon.png'
import '@/styles/navbar.css'

import { SlMagnifier } from "react-icons/sl"
import { SlGrid } from "react-icons/sl"
import { SlFrame } from "react-icons/sl"
import { SlBell } from "react-icons/sl"
import { SlSettings } from "react-icons/sl"

const Navbar = () => {
  const iconSize = 20

  return (
    <div className='navbar-container'>

      <div className='navbar-brand'>
        <img 
          src={Brand}
          alt="brand"
        />
        <h2>MyAdminApp</h2>
      </div>

      <div className='navbar-icons'>
        <SlMagnifier size={iconSize} className='icon-button left-icon'/>
        <SlGrid size={iconSize} className='icon-button left-icon'/>
        <SlFrame size={iconSize} className='icon-button left-icon'/>
        <div className='navbar-icons-notif icon-button left-icon'>
          <SlBell size={iconSize}/>
          <span>1</span>
        </div>

        <div className='navbar-icons-profile'>
          <div className='navbar-profile icon-button'>
            <div className='profile-pic'>
              <img 
                src='https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png'
                alt='profile'
                width={30}
                height={30}
              />
            </div>
            <h5>Profile</h5>
          </div>
          <SlSettings size={iconSize} className='icon-button'/>
        </div>

      </div>

    </div>
  )
}

export default Navbar