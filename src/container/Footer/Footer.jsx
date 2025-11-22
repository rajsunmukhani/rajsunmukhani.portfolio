import React, { useState } from 'react'
import {images} from '../../constants'
import {AppWrap, MotionWrap} from '../../wrapper'
import { client } from '../../client';

import './Footer.scss'
const Footer = () => {

  const [formData, setFormData] = useState({name : '', email : '', message : ''});
  const [isFromSubmitted, setIsFromSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type : 'contact',
      name : name,
      email : email,
      message : message
    }

    client.create(contact).then(() => {
      setLoading(false);
      setIsFromSubmitted(true);
    })
  }

  return (
    <>
     <h2 className='head-text'>Code. <span>Connect.</span> Create.</h2> 

     <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:rajsunmukhani123@gmail.com" className='p-text'>rajsunmukhani123@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +91 72230 68964" className='p-text'>+91 XXXXX XX964</a>
        </div>
     </div>

    {!isFromSubmitted ? 
     <div className='app__footer-form app__flex'>
      <div className='app__flex'>
        <input className='p-text' type="text" placeholder='Your Name' value={name} name='name' onChange={handleChange} />
      </div>
      <div className='app__flex'>
        <input className='p-text' type="email" placeholder='Your Email' value={email} name='email' onChange={handleChange} />
      </div>
      <div>
        <textarea className='p-text' placeholder='Your message' value={message} name='message' onChange={handleChange} id=""></textarea>
      </div>

      <button className='p-text' type='button' onClick={handleSubmit}>{loading ? 'Loading...' : 'Send Message' }</button>
     </div>
    :
    <div>
      <h3 className='head-text'>Thankyou for <span>Connecting</span>!</h3>
    </div>
    }
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg')