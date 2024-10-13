import React from 'react'
import './index.css'
import NavBar from './Components/NavBar/NavBar'
import Profile from './Components/Profile/Profile'
import About from './Components/About/About'
import Certification from './Components/Certification/Certification'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Profile />
      <About />
      <Certification />
      <Project />
      <Contact />
    </div>
  )
}

export default App