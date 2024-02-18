import React from 'react'
import '../styles/home.css'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'
import Single from './Single'


function Home() {
  return (
    <>
    <Header />
    <div className='home'>
      <Posts />
      <Sidebar />
    </div>
    </>
  )
}

export default Home
