import React from 'react'
import '../styles/sidebar.css'
import Image from '../assets/sidebar.jpg'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle"> About me </span>
        <img src={Image} alt='' />
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis impedit, distinctio cum officia totam earum ratione praesentium soluta est neque rerum maxime amet eaque, quo, facere iusto non modi architecto! </p>
      </div>
      <div className='sidebarItem'>
        <span className="sidebarTitle"> Categories </span>
        <ul className="sidebarList">
          <li className="sidebarListItem"> Love Poems </li>
          <li className="sidebarListItem"> State Poems </li>
          <li className="sidebarListItem"> Statements </li>
          <li className="sidebarListItem"> Opinions </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
