import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { images } from '../../constants';
const About = () => {
  const abouts = [
    {
      title: 'Web Development',
      description: 'Since 2018',
      imgUrl: images.about01,
    },
    {
      title: 'UI & UX Development',
      description: 'UI & UX design solution',
      imgUrl: images.about04,
    },
    {
      title: 'Frontend Development',
      description: 'Current tech trend',
      imgUrl: images.about02,
    },

    {
      title: 'MERN stack',
      description: 'Self taught developer',
      imgUrl: images.about03,
    },
  ];

  return (
    <>
      <h2 className='head-text'>
        I Know That <span>Good Development</span> <br /> means{' '}
        <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profiles-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='bold-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
