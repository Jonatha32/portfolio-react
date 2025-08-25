import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, 
  FaFigma, FaDocker, FaAws, FaJira, FaWordpress, FaNpm,
  FaPython, FaLinux, FaUserFriends, FaComments, FaBrain, 
  FaHandshake, FaLightbulb, FaChartLine, FaLanguage,
  FaPaintBrush, FaHeartbeat, FaFileExcel, FaPuzzlePiece
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiRedux, SiMongodb, SiExpress, 
  SiNextdotjs, SiGraphql, SiTailwindcss, SiFirebase, SiJest, 
  SiPostgresql, SiMysql, SiShell,
  SiFlutter,
  SiDart, 
  SiC,
  SiLinux,
  SiGnubash,
} from 'react-icons/si';
import { LanguageContext } from '../../App';

const SkillsContainer = styled.div`
  padding: 180px 0 80px;
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
  const { translations } = useContext(LanguageContext);
  
  const frontendSkills = [
    { name: 'React', icon: <FaReact className="icon" />, level: 95 },
    { name: 'JavaScript', icon: <SiJavascript className="icon" />, level: 90 },
    { name: 'HTML5', icon: <FaHtml5 className="icon" />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt className="icon" />, level: 90 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="icon" />, level: 85 },
    { name: 'Flutter', icon: <SiFlutter className="icon" />, level: 85 },
    { name: 'Dart', icon: <SiDart className="icon" />, level: 85 }

  ];
  
  const backendSkills = [
    { name: 'Python', icon: <FaPython className="icon" />, level: 85 },
    { name: 'Firebase', icon: <SiFirebase className="icon" />, level: 75 },
    { name: 'C', icon: <SiC className="icon" />, level: 70 },
    { name: 'MySQL', icon: <SiMysql className="icon" />, level: 80 },
  ];
  
  const toolsSkills = [
    { name: translations.git, icon: <FaGitAlt className="icon" />, level: 90 },
    { name: translations.docker, icon: <FaDocker className="icon" />, level: 75 },
    { name: translations.aws, icon: <FaAws className="icon" />, level: 70 },
    { name: translations.figma, icon: <FaFigma className="icon" />, level: 75 },
    { name: translations.jira, icon: <FaJira className="icon" />, level: 85 },
    { name: translations.npm, icon: <FaNpm className="icon" />, level: 90 },
    { name: translations.wordpress, icon: <FaWordpress className="icon" />, level: 80 },
    { name: translations.shellScripting, icon: <SiGnubash className="icon" />, level: 80 },
  ];
  
  const softSkills = [
    { name: translations.teamwork, icon: <FaUserFriends className="icon" />, level: 95 },
    { name: translations.communication, icon: <FaComments className="icon" />, level: 90 },
    { name: translations.problemSolving, icon: <FaPuzzlePiece className="icon" />, level: 95 },
    { name: translations.adaptability, icon: <FaLightbulb className="icon" />, level: 90 },
    { name: translations.leadership, icon: <FaChartLine className="icon" />, level: 85 },
    { name: translations.creativity, icon: <FaPaintBrush className="icon" />, level: 90 },
    { name: translations.emotionalIntelligence, icon: <FaHeartbeat className="icon" />, level: 85 },
  ];
  
  const otherSkills = [
    { name: translations.projectManagement, icon: <FaHandshake className="icon" />, level: 85 },
    { name: translations.languages, icon: <FaLanguage className="icon" />, level: 80 },
    { name: translations.uiUxDesign, icon: <FaFigma className="icon" />, level: 75 },
    { name: translations.excel, icon: <FaFileExcel className="icon" />, level: 85 },
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
              <h1>{translations.skillsPageTitle}</h1>
              <p>
                {translations.skillsPageDescription}
              </p>
            </motion.div>
          </SkillsHeader>
          
          <SkillsSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SectionTitle>{translations.frontendDev}</SectionTitle>
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
              <SectionTitle>{translations.backendDevOps}</SectionTitle>
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
              <SectionTitle>{translations.toolsMore}</SectionTitle>
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
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <SectionTitle>{translations.softSkills}</SectionTitle>
              <SkillsGrid>
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <SkillCard>
                      {skill.icon}
                      <h3>{skill.name}</h3>
                      <ProgressContainer>
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
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <SectionTitle>{translations.otherSkills}</SectionTitle>
              <SkillsGrid>
                {otherSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  >
                    <SkillCard>
                      {skill.icon}
                      <h3>{skill.name}</h3>
                      <ProgressContainer>
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