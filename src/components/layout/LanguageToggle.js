import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLanguage } from 'react-icons/fa';
import { LanguageContext } from '../../App';

const ToggleContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 80px; // Positioned to the left of the ThemeToggle
  z-index: 1000;
`;

const ToggleButton = styled.button`
  background-color: ${({ language }) => (language === 'en' ? '#6c63ff' : '#ff6b6b')};
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
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
`;

const LanguageText = styled.span`
  font-weight: bold;
  font-size: 0.9rem;
`;

const LanguageToggle = ({ language, toggleLanguage }) => {
  const { translations } = useContext(LanguageContext);
  
  return (
    <ToggleContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ToggleButton 
          onClick={toggleLanguage} 
          language={language}
          aria-label={language === 'en' ? 'Cambiar a español' : 'Switch to English'}
        >
          {language === 'en' ? 'ES' : 'EN'}
        </ToggleButton>
      </motion.div>
    </ToggleContainer>
  );
};

export default LanguageToggle;