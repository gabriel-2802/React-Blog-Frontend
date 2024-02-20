import React from 'react'
import '../styles/profile.css'
import Image from '../assets/pexels-sheep-1846422.jpg'
import Sidebar from '../components/Sidebar'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

function Profile() {
  return (
    <div className='profile'>
        <div className="profileWrapper">
            <form action="" className="profileForm">
                <label> Profile Picture </label>
                <div className="profilePP">
                    <img src={Image} alt="" className="profileImg" />
                    <label htmlFor="fileInput"> <i className="profilePPIcon"> <AddAPhotoIcon /> </i> </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                </div>

                <label> Username </label>
                <input type="text" placeholder="Username" />
                <label> Email </label>
                <input type="email" placeholder="Email" />

                <label> Password </label>
                <input type="password" placeholder="Password" />

                <button className="profileSubmitButton"> Update </button>
                <button className="profileDeleteButton"> Delete Account </button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}

export default Profile
