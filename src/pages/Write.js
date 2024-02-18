import React from 'react'
import '../styles/write.css'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import PublishIcon from '@mui/icons-material/Publish';
import Image from '../assets/pexels-sheep-1846422.jpg'

function Write() {
  return (
    <div className='write'>
        <img className="writeImg" src={Image} alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label className="fileInput" htmlFor='fileInput'> <AddPhotoAlternateIcon /> </label>
                <input type="file" id="fileInput" style={{display:"none"}}></input>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="State..." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit"> <PublishIcon /> </button>
        </form>
      
    </div>
  )
}

export default Write
