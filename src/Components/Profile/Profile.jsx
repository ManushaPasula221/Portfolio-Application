import React from 'react'
import profile from '../../assets/profile-img.avif'
import './Profile.css'

const Profile = () => {
  return (
    <div id='profile' className='profile'>
        <div class="image-cropper">
          <img src={profile} alt="avatar" class="profile-pic" />
        </div>
        <h1><span>I’m Manusha Pasula</span>, Developer based in Hyderabad</h1>
        <p>I am a developer from Hyderabad with 2 year of experience in Wipro Technologies.</p>
        <div className='profile-action'>
            <div className='profile-connect'>Connect with me</div>
            <div className='profile-resume'>My Resume</div>
        </div>
    </div>
  )
}

export default Profile