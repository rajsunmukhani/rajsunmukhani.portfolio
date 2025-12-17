import React, { lazy, Suspense } from 'react'

import {Header, About} from './container'
import {Navbar, ProfileImage} from './components'
import './App.scss'

const Works = lazy(() => import('./container/Works/Works'));
const Skills = lazy(() => import('./container/Skills/Skills'));
const Footer = lazy(() => import('./container/Footer/Footer'));
const Chatbot = lazy(() => import('./chatbot/Chatbot'));

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header/>
      <ProfileImage />
      <About/>
      {/* <Works/>
      <Skills/>
      <Testimonials/>
      <Footer/> */}
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Works />
        <Skills />
        <Footer />
        <Chatbot />
      </Suspense>
    </div>
  )
}


export default App
