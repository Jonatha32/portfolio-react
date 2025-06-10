import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiRedux, SiMongodb, SiFirebase, SiC, SiPython, SiDart, SiMysql, SiGit } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaFlutter } from 'react-icons/fa6';
import { DiFirebase } from 'react-icons/di';
import { IoLogoFirebase } from 'react-icons/io5';
import { LanguageContext } from '../../App';

const SkillsContainer = styled.section`
  padding: 100px 0;
  background-color: #f9f9f9;
  
  .dark-mode & {
    background-color: #1a1a1a;
  }
`;

const SkillsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const SectionTitle = styled.div`
  margin-bottom: 50px;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 70px;
      height: 4px;
      background: var(--primary-color);
    }
  }
  
  p {
    max-width: 600px;
    margin: 0 auto;
    color: #777;
    
    .dark-mode & {
      color: #aaa;
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: 15px;
    color: var(--primary-color);
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  .dark-mode & {
    background-color: #2a2a2a;
  }
`;

const MoreButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
`;

const SkillsPreview = () => {
  const { translations } = useContext(LanguageContext);
  
  const skills = [
    { name: 'React', icon: <FaReact className="icon" /> },
    { name: 'JavaScript', icon: <SiJavascript className="icon" /> },
    { name: 'Tailwind', icon: <RiTailwindCssFill className="icon" /> },
    { name: 'HTML5', icon: <FaHtml5 className="icon" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="icon" /> },
    { name: 'Flutter', icon: <FaFlutter className="icon" /> },
    { name: 'Firebase', icon: <IoLogoFirebase className="icon" /> },
    { name: 'C', icon: <SiC className="icon" /> },
    { name: 'Python', icon: <SiPython className="icon" /> },
    { name: 'Dart', icon: <SiDart className="icon" /> },
    { name: 'MySQL', icon: <SiMysql className="icon" /> },
    { name: 'Git', icon: <SiGit className="icon" /> },
  ];

  return (
    <SkillsContainer>
      <SkillsContent>
        <SectionTitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>{translations.mySkills}</h2>
            <p>
              {translations.skillsDescription}
            </p>
          </motion.div>
        </SectionTitle>
        
        <SkillsGrid>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard>
                {skill.icon}
                <h3>{skill.name}</h3>
              </SkillCard>
            </motion.div>
          ))}
        </SkillsGrid>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <MoreButton to="/skills" className="btn">
            {translations.viewAllSkills}
          </MoreButton>
        </motion.div>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default SkillsPreview;