import React from 'react'
import '../styles/navbar.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from '../assets/top.jpeg'
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom'
import Profile from '../pages/Profile'

function navbar() {
  return (
    <div className='top'>
        <div className='topLeft'>
            <a href='https://github.com/gabriel-2802'> <GitHubIcon/> </a>
            <span className='logo'> Gabriel's Blog</span>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <Link to='/' className='link'> <li className='topListItem'> Home </li> </Link>
                <Link to='/write' className='link'> <li className='topListItem'> Write </li> </Link>
                <Link to='/login' className='link'> <li className='topListItem'> Login </li> </Link>
            </ul>
        </div>
        <div className='topRight'>
            <Link to='profile' className='link'> <img className='topImg' src={Image} alt='' /> </Link>
            <i className='topSearchIcon'> <SearchIcon /> </i>
        </div>
      
    </div>
  )
}

export default navbar