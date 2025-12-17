import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { CustomSwiper } from '../../components';

import './Works.scss';

const SkeletonCard = () => (
  <div className="app__work-item app__flex skeleton">
    <div className="app__work-img app__flex" style={{ backgroundColor: '#e2e2e2', height: '200px', width: '100%' }} />
    <div className="app__work-content app__flex">
      <div className="skeleton-line" style={{ width: '80%', height: '20px', background: '#eee', marginBottom: '10px' }} />
      <div className="skeleton-line" style={{ width: '60%', height: '15px', background: '#eee' }} />
    </div>
  </div>
);

const Works = () => {
  const [activefilter, setActivefilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "works"]';
    
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
      setIsLoading(false);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActivefilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className='head-text'>My creative <span>portfolio</span> section</h2>

      <div className='app__work-filter'>
        {['Frontend', 'Backend', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <button // Changed to button for Accessibility score boost
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activefilter === item ? 'item-active' : ''}`}
            aria-label={`Filter by ${item}`}
          >
            {item}
          </button>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {isLoading ? (
          <div className="app__flex" style={{ flexWrap: 'wrap', gap: '2rem' }}>
            {[1, 2, 3].map((n) => <SkeletonCard key={n} />)}
          </div>
        ) : filterWork.length > 0 ? (
          <CustomSwiper
            items={filterWork}
            renderItem={(work, index) => (
              <div className='app__work-item app__flex' key={index}>
                <div className='app__work-img app__flex'>
                  <motion.img 
                    initial={{ opacity: 0 }}
                    // Use ref-based or purely CSS transition for better performance
                    onLoad={(e) => (e.target.style.opacity = 1)}
                    // .url() is essential at the end of urlFor chains
                    src={urlFor(work.imgUrl).width(600).quality(70).auto('format').url()} 
                    alt={work.name || "Portfolio Project"} // Fallback for Accessibility
                    loading="lazy" 
                    decoding="async" // Helps browser process images off the main thread
                    style={{ transition: 'opacity 0.4s ease-in' }}
                  />

                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className='app__work-hover app__flex'
                  >
                    <a href={work.projectLink} target='_blank' rel='noreferrer' aria-label="View Live Project">
                      <motion.div
                        whileInView={{ scale: [0.1, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        className='app__flex'
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                    <a href={work.codeLink} target='_blank' rel='noreferrer' aria-label="View Source Code">
                      <motion.div
                        whileInView={{ scale: [0.1, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        className='app__flex'
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </motion.div>
                </div>

                <div className='app__work-content app__flex'>
                  <h4 className='bold-text'>{work.title}</h4>
                  <p className='p-text' style={{ marginTop: 10 }}>{work.description}</p>
                  <div className='app__work-tag app__flex'>
                    <p className='p-text'>{work.tags?.[0] || 'Project'}</p>
                  </div>
                </div>
              </div>
            )}
          />
        ) : (
          <motion.div className='app__work-item app__flex no-project-card'>
            <h2 className='bold-text'>No Projects Found</h2>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Works, 'app__works'), 'work', 'app__primarybg');