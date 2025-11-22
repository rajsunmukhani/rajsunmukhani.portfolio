import React from 'react'
import './About.scss'
import { AppWrap, MotionWrap } from '../../wrapper'
import resumeFile from '../../assets/Raj Sunmukhani Resume (6).pdf';

const About = () => {
  const RESUME_FILE_URL = resumeFile; 

  return (
    <div className='app__about app__flex'>
      <div className='app__about-left'>
        {/* Avatar will stick here */}
      </div>
      <div className='app__about-right'>
        <h2 className='head-text'>
            About <span>Me</span> 
        </h2>
        <p className='p-text about-text'>
          I began my journey with <span>Java</span>  and <span>OOPs</span> , and eventually found a deep passion for Full-Stack Web Development using the <span>MERN stack</span>. Over the years, I’ve built projects that strengthened my skills in Frontend Design, Backend Architecture, and writing clean, efficient, and secure code. <br /> <br />
          Coming from a 4-year background as an <span>Accounts Executive</span>, I bring discipline, patience, and analytical thinking into every problem I solve. I enjoy breaking down complex challenges, understanding root causes, and crafting solutions that are both functional and elegant. <br /> <br />
          I'm dedicated to continuous learning and improving myself with every project I build. <span>I love coding</span>, exploring new technologies, and creating meaningful digital experiences — and I’m excited to bring this energy into a <span>organisation</span> that’s willing to give me a chance to prove myself and grow with the team.
        </p>
        <div className='app__about-right-btn'>
          <a href={RESUME_FILE_URL} download="RajSunmukhani-Resume.pdf">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(About, 'about'), 'about', 'app__whitebg')
// export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg')
