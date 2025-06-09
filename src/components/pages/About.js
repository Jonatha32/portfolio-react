import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaDownload, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const AboutContainer = styled.div`
  padding: 120px 0 80px;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const AboutHeader = styled.div`
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

const AboutSection = styled.section`
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

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    font-size: 1.1rem;
  }
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: var(--primary-color);
  color: #fff;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  svg {
    margin-right: 8px;
  }
  
  &:hover {
    background-color: #5952d4;
    transform: translateY(-3px);
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: #e0e0e0;
    
    .dark-mode & {
      background-color: #444;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 30px;
  margin-bottom: 40px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: var(--primary-color);
  }
`;

const TimelineHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
  .icon {
    font-size: 1.5rem;
    margin-right: 10px;
    color: var(--primary-color);
  }
`;

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 5px;
`;

const TimelinePeriod = styled.span`
  font-size: 0.9rem;
  color: #777;
  background-color: #f0f0f0;
  padding: 3px 10px;
  border-radius: 20px;
  margin-left: 10px;
  
  .dark-mode & {
    background-color: #333;
    color: #aaa;
  }
`;

const TimelineSubtitle = styled.h4`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 10px;
  
  .dark-mode & {
    color: #bbb;
  }
`;

const TimelineText = styled.p`
  line-height: 1.6;
`;

const AboutStorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StoryItem = styled.div`
  display: flex;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  .dark-mode & {
    background-color: #2a2a2a;
  }
`;

const StoryIcon = styled.div`
  font-size: 2rem;
  margin-right: 15px;
  display: flex;
  align-items: center;
`;

const StoryText = styled.div`
  strong {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: var(--primary-color);
  }
  
  p {
    margin: 0;
    line-height: 1.6;
  }
`;

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutContainer>
        <AboutContent>
          <AboutHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>About Me</h1>
              <p>
                Learn more about my professional career, education, and passions.
              </p>
            </motion.div>
          </AboutHeader>
          
          <AboutSection>
            <AboutGrid>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <AboutImage>
                  <img src="https://github.com/Jonatha32/portfolio-react/blob/main/public/image3.jpg?raw=true"></img>
                </AboutImage>
              
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <AboutText>
                  <SectionTitle>My Story</SectionTitle>
                  <h3>What defines me?</h3>
                  <AboutStorySection>
                    <StoryItem>
                      <StoryIcon>🎤</StoryIcon>
                      <StoryText>
                        <strong>Artistic Soul</strong>
                        <p>I write songs, compose lyrics, and live every musical process with my heart.</p>
                      </StoryText>
                    </StoryItem>
                    
                    <StoryItem>
                      <StoryIcon>💻</StoryIcon>
                      <StoryText>
                        <strong>Tech Enthusiast</strong>
                        <p>I enjoy solving problems, creating experiences, and learning new technologies.</p>
                      </StoryText>
                    </StoryItem>
                    
                    <StoryItem>
                      <StoryIcon>☀️</StoryIcon>
                      <StoryText>
                        <strong>Life Philosophy</strong>
                        <p>I believe in perseverance, presence, and the power of visualizing what you want.</p>
                      </StoryText>
                    </StoryItem>
                    
                    <StoryItem>
                      <StoryIcon>🌍</StoryIcon>
                      <StoryText>
                        <strong>Diverse Interests</strong>
                        <p>I love languages, science, cinema, philosophy, soccer, and above all... art in all its forms.</p>
                      </StoryText>
                    </StoryItem>
                  </AboutStorySection>
                  <ResumeButton href="#" onClick={(e) => { e.preventDefault(); alert('CV download will be available soon!'); }}>
                    <FaDownload /> Download CV
                  </ResumeButton>
                </AboutText>
              </motion.div>
            </AboutGrid>
          </AboutSection>
          
          <AboutSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <SectionTitle>Experience in teamwork</SectionTitle>
              <TimelineContainer>
                <TimelineItem>
                  <TimelineHeader>
                    <FaBriefcase className="icon" />
                    <TimelineTitle>Development of a Simple Shell in C</TimelineTitle>
                    <TimelinePeriod>2024</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineSubtitle>Holberton School — Group project</TimelineSubtitle>
                  <TimelineText>
                  <p>• Implementation of a simple shell capable of executing system commands.</p> 
                  <p>• Process management, signals, standard input/output, and manual parsing.</p>
                  <p>• Collaborative work using Git and agile methodologies.</p>
                  </TimelineText>
                </TimelineItem>
                
                <TimelineItem>
                  <TimelineHeader>
                    <FaBriefcase className="icon" />
                    <TimelineTitle>Copy of the Airbnb Web Interface</TimelineTitle>
                    <TimelinePeriod>2025</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineSubtitle>Holberton School — Group project with Python & SQL</TimelineSubtitle>
                  <TimelineText>
                  <p>• Backend development with Python and MySQL database connection.</p> 
                  <p>• Design and construction of RESTful APIs.</p>
                  <p>• Route management, data persistence, and unit testing.</p>
                  </TimelineText>
                </TimelineItem>

                <TimelineItem>
                  <TimelineHeader>
                    <FaBriefcase className="icon" />
                    <TimelineTitle>Cassé — Application to promote the circular economy</TimelineTitle>
                    <TimelinePeriod>2025</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineSubtitle>Final Project of Holberton School — Flutter & Firebase</TimelineSubtitle>
                  <TimelineText>
                  <p>• Design and implementation of a multiplatform app in Flutter.</p> 
                  <p>• Integration with Firebase (Authentication, Firestore, Storage).</p>
                  <p>• Teamwork using Scrum methodologies and version control in GitHub.</p>
                  <p>• UX/UI focus and mobile-first development.</p>

                  </TimelineText>
                </TimelineItem>
              </TimelineContainer>
            </motion.div>
          </AboutSection>
          
          <AboutSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <SectionTitle>Education</SectionTitle>
              <TimelineContainer>
                <TimelineItem>
                  <TimelineHeader>
                    <FaGraduationCap className="icon" />
                    <TimelineTitle>Full Stack Software Developer</TimelineTitle>
                    <TimelinePeriod>2024 - 2025</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineSubtitle>Holberton School Uruguay</TimelineSubtitle>
                  <TimelineText>
                  <p>• Intensive focus on backend and frontend development, with peer-learning methodologies and real projects.</p> 
                  <p>• Development in C, Python, HTML, CSS, JavaScript, React, Flutter, Firebase, MySQL, Git.</p>
                  <p>• Experience in teamwork, problem solving, and agile methodologies.</p>
                  </TimelineText>
                </TimelineItem>
                
                <TimelineItem>
                  <TimelineHeader>
                    <FaGraduationCap className="icon" />
                    <TimelineTitle>Technical Degree in Business Administration</TimelineTitle>
                    <TimelinePeriod>2025</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineSubtitle>University of the Republic (UdelaR) – School of Economic Sciences and Administration</TimelineSubtitle>
                  <TimelineText>
                  <p>• Training in management, accounting, economics, marketing, human resources, and law.</p> 
                  <p>• Focus on critical thinking, problem-solving, and real-world administrative practices.</p>
                  </TimelineText>
                </TimelineItem>
              </TimelineContainer>
            </motion.div>
          </AboutSection>
        </AboutContent>
      </AboutContainer>
    </motion.div>
  );
};

export default About;