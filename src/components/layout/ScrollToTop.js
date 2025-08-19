import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { LanguageContext } from '../../App';

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 200px; // Positioned to the left of the AI chat
  z-index: 1000;
  background-color: #6c63ff;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { translations } = useContext(LanguageContext);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollButton 
        onClick={scrollToTop} 
        visible={isVisible}
        aria-label={translations.scrollToTop}
      >
        <FaArrowUp />
      </ScrollButton>
    </motion.div>
  );
};

export default ScrollToTopButton;