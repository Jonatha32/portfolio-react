import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { LanguageContext } from '../../App';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;

  &.scrolled {
    padding: 0.3rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
  
  .dark-mode & {
    background-color: #1a1a1a;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  position: relative;
  
  span {
    color: var(--secondary-color);
  }
  
  img {
    height: 140px;
    width: auto;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3)) brightness(1.1);
    animation: logoFloat 3s ease-in-out infinite;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 160px;
    height: 160px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    animation: logoGlow 2s ease-in-out infinite alternate;
    z-index: -1;
  }
  
  &:hover img {
    transform: scale(1.15) rotate(5deg);
    filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.4)) brightness(1.3) saturate(1.2);
    animation-play-state: paused;
  }
  
  .dark-mode & img {
    filter: drop-shadow(0 8px 16px rgba(255, 255, 255, 0.2)) brightness(1.2);
  }
  
  .dark-mode &::before {
    background: radial-gradient(circle, rgba(187, 134, 252, 0.15) 0%, transparent 70%);
  }
  
  .dark-mode &:hover img {
    filter: drop-shadow(0 12px 24px rgba(255, 255, 255, 0.3)) brightness(1.4) saturate(1.3);
  }
  
  @keyframes logoFloat {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-8px) rotate(2deg);
    }
  }
  
  @keyframes logoGlow {
    0% {
      opacity: 0.3;
      transform: translate(-50%, -50%) scale(0.8);
    }
    100% {
      opacity: 0.6;
      transform: translate(-50%, -50%) scale(1.2);
    }
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    background-color: #fff;
    padding: 1rem 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    z-index: 999;
    
    .dark-mode & {
      background-color: #1e1e1e;
    }
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const NavLink = styled(Link)`
  color: var(--dark-color);
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }
  
  &:hover::after,
  &.active::after {
    width: 100%;
  }
  
  .dark-mode & {
    color: var(--light-color);
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const { translations } = useContext(LanguageContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Detectar cambios en el modo oscuro
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains('dark-mode'));
    };
    
    // Comprobar inicialmente
    checkDarkMode();
    
    // Crear un observador para detectar cambios en las clases del body
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <NavbarContainer className={scrolled ? 'scrolled' : ''}>
      <Logo to="/">
        <motion.div
          initial={{ 
            opacity: 0, 
            scale: 0.3, 
            rotate: -180,
            y: -50
          }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotate: 0,
            y: 0
          }}
          transition={{ 
            duration: 1.2,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          whileHover={{
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.6 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src={isDarkMode 
              ? "https://github.com/Jonatha32/portfolio-react/blob/main/public/logoitech2.png?raw=true" 
              : "https://github.com/Jonatha32/portfolio-react/blob/main/public/lo.png?raw=true"} 
            alt="Logo" 
          />
        </motion.div>
      </Logo>
      
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      
      <NavMenu isOpen={isOpen}>
        <NavItem>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            {translations.home}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            {translations.about}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>
            {translations.skills}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
            {translations.projects}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            {translations.contact}
          </NavLink>
        </NavItem>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;