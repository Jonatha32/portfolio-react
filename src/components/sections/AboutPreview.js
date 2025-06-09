import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../App';

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
  const { translations } = useContext(LanguageContext);
  
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
            <h2>{translations.aboutMe}</h2>
            <p>
              {translations.aboutText1}
            </p>
            <p>
              {translations.aboutText2}
            </p>
            <p>
              {translations.aboutText3}
            </p>
            <Link to="/about" className="read-more">
              {translations.learnMore} <FaArrowRight />
            </Link>
          </AboutText>
        </motion.div>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutPreview;