import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, 
  FaFigma, FaDocker, FaAws, FaJira, FaWordpress, FaNpm
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiRedux, SiMongodb, SiExpress, 
  SiNextdotjs, SiGraphql, SiTailwindcss, SiFirebase, SiJest, 
  SiPostgresql, SiMysql
} from 'react-icons/si';

const SkillsContainer = styled.div`
  padding: 120px 0 80px;
`;

const SkillsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SkillsHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    color: #777;
    max-width: 700px;
    margin: 0 auto;
    
    .dark-mode & {
      color: #aaa;
    }
  }
`;

const SkillsSection = styled.section`
  margin-bottom: 80px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: var(--primary-color);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    font-size: 3.5rem;
    margin-bottom: 15px;
    color: var(--primary-color);
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  .level {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #e0e0e0;
    margin: 0 3px;
    
    &.filled {
      background-color: var(--primary-color);
    }
  }
  
  .dark-mode & {
    background-color: #2a2a2a;
  }
`;

const ProgressContainer = styled.div`
  margin-top: 15px;
`;

const ProgressBar = styled.div`
  height: 6px;
  background-color: #f0f0f0;
  border-radius: 3px;
  overflow: hidden;
  
  .dark-mode & {
    background-color: #444;
  }
`;

const Progress = styled.div`
  height: 100%;
  background-color: var(--primary-color);
  border-radius: 3px;
  width: ${props => props.level}%;
`;

const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-top: 5px;
  color: #777;
  
  .dark-mode & {
    color: #aaa;
  }
`;

const Skills = () => {
  const frontendSkills = [
    { name: 'React', icon: <FaReact className="icon" />, level: 95 },
    { name: 'JavaScript', icon: <SiJavascript className="icon" />, level: 90 },
    { name: 'TypeScript', icon: <SiTypescript className="icon" />, level: 85 },
    { name: 'HTML5', icon: <FaHtml5 className="icon" />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt className="icon" />, level: 90 },
    { name: 'Redux', icon: <SiRedux className="icon" />, level: 85 },
    { name: 'Next.js', icon: <SiNextdotjs className="icon" />, level: 80 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="icon" />, level: 85 }
  ];
  
  const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs className="icon" />, level: 85 },
    { name: 'Express', icon: <SiExpress className="icon" />, level: 80 },
    { name: 'MongoDB', icon: <SiMongodb className="icon" />, level: 75 },
    { name: 'GraphQL', icon: <SiGraphql className="icon" />, level: 70 },
    { name: 'PostgreSQL', icon: <SiPostgresql className="icon" />, level: 75 },
    { name: 'MySQL', icon: <SiMysql className="icon" />, level: 80 },
    { name: 'Firebase', icon: <SiFirebase className="icon" />, level: 85 }
  ];
  
  const toolsSkills = [
    { name: 'Git', icon: <FaGitAlt className="icon" />, level: 90 },
    { name: 'Docker', icon: <FaDocker className="icon" />, level: 75 },
    { name: 'AWS', icon: <FaAws className="icon" />, level: 70 },
    { name: 'Jest', icon: <SiJest className="icon" />, level: 80 },
    { name: 'Figma', icon: <FaFigma className="icon" />, level: 75 },
    { name: 'Jira', icon: <FaJira className="icon" />, level: 85 },
    { name: 'npm', icon: <FaNpm className="icon" />, level: 90 },
    { name: 'WordPress', icon: <FaWordpress className="icon" />, level: 80 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SkillsContainer>
        <SkillsContent>
          <SkillsHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>Mis Habilidades</h1>
              <p>
                Estas son las tecnologías y herramientas con las que trabajo diariamente
              </p>
            </motion.div>
          </SkillsHeader>
          
          <SkillsSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SectionTitle>Desarrollo Frontend</SectionTitle>
              <SkillsGrid>
                {frontendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <SkillCard>
                      {skill.icon}
                      <h3>{skill.name}</h3>
                      <ProgressContainer>
                        <ProgressBar>
                          <Progress level={skill.level} />
                        </ProgressBar>
                        <ProgressText>
                          <span>Principiante</span>
                          <span>Experto</span>
                        </ProgressText>
                      </ProgressContainer>
                    </SkillCard>
                  </motion.div>
                ))}
              </SkillsGrid>
            </motion.div>
          </SkillsSection>
          
          <SkillsSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <SectionTitle>Desarrollo Backend</SectionTitle>
              <SkillsGrid>
                {backendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <SkillCard>
                      {skill.icon}
                      <h3>{skill.name}</h3>
                      <ProgressContainer>
                        <ProgressBar>
                          <Progress level={skill.level} />
                        </ProgressBar>
                        <ProgressText>
                          <span>Principiante</span>
                          <span>Experto</span>
                        </ProgressText>
                      </ProgressContainer>
                    </SkillCard>
                  </motion.div>
                ))}
              </SkillsGrid>
            </motion.div>
          </SkillsSection>
          
          <SkillsSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <SectionTitle>Herramientas y Otros</SectionTitle>
              <SkillsGrid>
                {toolsSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <SkillCard>
                      {skill.icon}
                      <h3>{skill.name}</h3>
                      <ProgressContainer>
                        <ProgressBar>
                          <Progress level={skill.level} />
                        </ProgressBar>
                        <ProgressText>
                          <span>Principiante</span>
                          <span>Experto</span>
                        </ProgressText>
                      </ProgressContainer>
                    </SkillCard>
                  </motion.div>
                ))}
              </SkillsGrid>
            </motion.div>
          </SkillsSection>
        </SkillsContent>
      </SkillsContainer>
    </motion.div>
  );
};

export default Skills;