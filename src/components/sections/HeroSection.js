import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../App';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  z-index: 1;
`;

const HeroText = styled.div`
  max-width: 600px;
`;

const Greeting = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--secondary-color);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .btn {
    display: inline-block;
    background: var(--primary-color);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .btn:hover {
    background: #5952d4;
    transform: translateY(-3px);
  }
  
  .btn-outline {
    background: transparent;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
  }
  
  .dark-mode & .btn-outline {
    color: #fff;
  }
  
  .btn-outline:hover {
    background: var(--primary-color);
    color: #fff;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  
  p {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  
  .icon {
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: -300px;
  right: -300px;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  opacity: 0.1;
  z-index: 0;
`;

const HeroSection = () => {
  const { translations } = useContext(LanguageContext);
  
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <HeroContainer>
      <BackgroundShape />
      
      <HeroContent>
        <HeroText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Greeting>{translations.greeting}</Greeting>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Name>{translations.name}</Name>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Title>{translations.title}</Title>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Description>
              {translations.description}
            </Description>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ButtonContainer>
              <Link to="/projects" className="btn">
                {translations.viewProjects}
              </Link>
              <Link to="/contact" className="btn btn-outline">
                {translations.contactMe}
              </Link>
            </ButtonContainer>
          </motion.div>
        </HeroText>
      </HeroContent>
      
      <ScrollIndicator onClick={scrollToNextSection}>
        <p>{translations.scroll}</p>
        <FaArrowDown className="icon" />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;