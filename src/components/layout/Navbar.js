import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;

  &.scrolled {
    padding: 0.7rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
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
  
  span {
    color: var(--secondary-color);
  }
  
  img {
    height: 80px;
    width: auto;
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
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={isDarkMode 
              ? "https://github.com/Jonatha32/portfolio-react/blob/main/public/logo4-Photoroom.png?raw=true" 
              : "https://github.com/Jonatha32/portfolio-react/blob/main/public/Logoprofesional.png?raw=true"} 
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
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About Me
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>
            Skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </NavLink>
        </NavItem>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;