import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HeroSection from '../sections/HeroSection';
import AboutPreview from '../sections/AboutPreview';
import SkillsPreview from '../sections/SkillsPreview';
import ProjectsPreview from '../sections/ProjectsPreview';
import ContactCTA from '../sections/ContactCTA';

const HomeContainer = styled.div`
  padding-top: 70px;
`;

const SectionDivider = styled.div`
  height: 100px;
  background-color: #f9f9f9;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  margin-bottom: -50px;
  
  .dark-mode & {
    background-color: #1a1a1a;
  }
`;

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HomeContainer>
        <HeroSection />
        
        <SectionDivider />
        
        <AboutPreview />
        
        <SectionDivider />
        
        <SkillsPreview />
        
        <SectionDivider />
        
        <ProjectsPreview />
        
        <SectionDivider />
        
        <ContactCTA />
      </HomeContainer>
    </motion.div>
  );
};

export default Home;