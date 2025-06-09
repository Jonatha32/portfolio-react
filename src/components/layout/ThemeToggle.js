import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ToggleContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ToggleButton = styled.button`
  background-color: ${({ darkMode }) => (darkMode ? '#bb86fc' : '#6c63ff')};
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

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <ToggleContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ToggleButton 
          onClick={toggleDarkMode} 
          darkMode={darkMode}
          aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </ToggleButton>
      </motion.div>
    </ToggleContainer>
  );
};

export default ThemeToggle;