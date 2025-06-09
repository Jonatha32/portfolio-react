import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutContainer = styled.section`
  padding: 100px 0;
  background-color: #fff;
  
  .dark-mode & {
    background-color: #121212;
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const AboutImage = styled.div`
  position: relative;
  
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 2px solid var(--primary-color);
    border-radius: 10px;
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const AboutText = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 70px;
      height: 4px;
      background: var(--primary-color);
    }
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    font-size: 1.1rem;
  }
  
  .read-more {
    display: inline-flex;
    align-items: center;
    font-weight: 500;
    color: var(--primary-color);
    
    svg {
      margin-left: 5px;
      transition: transform 0.3s ease;
    }
    
    &:hover svg {
      transform: translateX(5px);
    }
  }
`;

const AboutPreview = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AboutImage>
            <img 
              src="https://raw.githubusercontent.com/Jonatha32/portfolio-react/main/public/image.jpg"
              alt="Foto de perfil" 
            />
          </AboutImage>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AboutText>
            <h2>About Me</h2>
            <p>
              Hello! My name is Jonathan Pérez, but many people know me as Jona.
              I am a Uruguayan singer-songwriter with a strong passion for art, music, and creativity. Currently, I am also training as a Full Stack developer at Holberton School and studying Business Administration at the Faculty of Economic Sciences (UDELAR).
            </p>
            <p>
              From a very young age, I discovered that my life is deeply connected to expression: through a melody, an idea, or a creative solution to a problem. I believe that art and technology can go hand in hand to transform the world.
            </p>
            <p>
              I am passionate about learning, creating, and communicating. I sing every day, I program with enthusiasm, and I am always thinking about the next project that will challenge me.
            </p>
            <Link to="/about" className="read-more">
              Learn more about me <FaArrowRight />
            </Link>
          </AboutText>
        </motion.div>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutPreview;