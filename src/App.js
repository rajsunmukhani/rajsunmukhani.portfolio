import React from 'react'

import {About, Footer, Header, Skills, Works} from './container'
import {Navbar, ProfileImage} from './components'

import './App.scss'
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header/>
      <ProfileImage />
      <About/>
      <Works/>
      <Skills/>
      {/* <Testimonials/> */}
      <Footer/>
    </div>
  )
}


export default App
