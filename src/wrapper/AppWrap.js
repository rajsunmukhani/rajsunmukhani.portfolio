import React from 'react'
import {SocialMedia, NavigationDots} from '../components'


const AppWrap = (Component, idName, classnames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classnames}`}>
        <SocialMedia/>
        <div className='app__wrapper app__flex'>
            <Component />
            <div className='copyright'>
                <p className='p-text'>@2025 Raj</p>
                <p className='p-text'>Let's Code</p>
            </div>
        </div>

        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap