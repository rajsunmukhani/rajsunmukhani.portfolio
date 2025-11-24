import React, { useLayoutEffect, useRef } from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';

import {images} from '../../constants'
import './ProfileImage.scss'

gsap.registerPlugin(ScrollTrigger);

const ProfileImage = () => {
  const avatarRef = useRef(null)

  useLayoutEffect(() => {
    const avatar = avatarRef.current;

    gsap.fromTo(
      avatar,
      {
        xPercent: -50,
        yPercent: -50,
        scale: 1,
        opacity: 1,
      },
      {
        x: "-25vw",          
        y: "90vh",          
        scale: 0.85,         
        ease: "easeInOut",
        scrollTrigger: {
          trigger: ".app__about",
          start: "top 115%",   
          end: "top 30%",        
          scrub: 2,
          // markers : true           
        },
      }
    );
  }, []);
  return (
    <>
        <img
          ref={avatarRef}
          className="profile-avatar"
          src={images.profile}
          alt="profile of Raj"
        />

    </>
  )
}


export default ProfileImage
