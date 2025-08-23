import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaDownload, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { LanguageContext } from '../../App';

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

const CertificateActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-wrap: wrap;
`;

const CertificateButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  svg {
    margin-right: 6px;
    font-size: 0.8rem;
  }
  
  background-color: var(--primary-color);
  color: white;
  
  &:hover {
    background-color: #5952d4;
    transform: translateY(-2px);
  }
  

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
  const { translations } = useContext(LanguageContext);
  
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
              <h1>{translations.aboutPageTitle}</h1>
              <p>
                {translations.aboutPageDescription}
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
                  <SectionTitle>{translations.myStory}</SectionTitle>
                  <h3>{translations.whatDefinesMe}</h3>
                  <AboutStorySection>
                    <StoryItem>
                      <StoryIcon>🎤</StoryIcon>
                      <StoryText>
                        <strong>{translations.artisticSoul}</strong>
                        <p>{translations.artisticSoulDesc}</p>
                      </StoryText>
                    </StoryItem>
                    
                    <StoryItem>
                      <StoryIcon>💻</StoryIcon>
                      <StoryText>
                        <strong>{translations.techEnthusiast}</strong>
                        <p>{translations.techEnthusiastDesc}</p>
                      </StoryText>
                    </StoryItem>
                    
                    <StoryItem>
                      <StoryIcon>☀️</StoryIcon>
                      <StoryText>
                        <strong>{translations.lifePhilosophy}</strong>
                        <p>{translations.lifePhilosophyDesc}</p>
                      </StoryText>
                    </StoryItem>
                    
                    <StoryItem>
                      <StoryIcon>🌍</StoryIcon>
                      <StoryText>
                        <strong>{translations.diverseInterests}</strong>
                        <p>{translations.diverseInterestsDesc}</p>
                      </StoryText>
                    </StoryItem>
                  </AboutStorySection>
                  <ResumeButton href="/portfolio-react/Jonathan Pérez CV.pdf" download="Jonathan_Perez_CV.pdf">
                    <FaDownload /> {translations.downloadCV}
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
              <SectionTitle>{translations.experienceTitle}</SectionTitle>
              <TimelineContainer>
                <TimelineItem>
                  <TimelineHeader>
                    <FaBriefcase className="icon" />
                    <TimelineTitle>{translations.shellProject}</TimelineTitle>
                    <TimelinePeriod>2024</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineSubtitle>{translations.shellProjectSubtitle}</TimelineSubtitle>
                  <TimelineText>
                  <p>{translations.shellProjectDesc1}</p> 
                  <p>{translations.shellProjectDesc2}</p>
                  <p>{translations.shellProjectDesc3}</p>
                  </TimelineText>
                </TimelineItem>
                
                <TimelineItem>
                  <TimelineHeader>
                    <FaBriefcase className="icon" />
                    <TimelineTitle>{translations.airbnbProject}</TimelineTitle>
                    <TimelinePeriod>2025</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineSubtitle>{translations.airbnbProjectSubtitle}</TimelineSubtitle>
                  <TimelineText>
                  <p>{translations.airbnbProjectDesc1}</p> 
                  <p>{translations.airbnbProjectDesc2}</p>
                  <p>{translations.airbnbProjectDesc3}</p>
                  </TimelineText>
                </TimelineItem>

                <TimelineItem>
                  <TimelineHeader>
                    <FaBriefcase className="icon" />
                    <TimelineTitle>{translations.casseProject}</TimelineTitle>
                    <TimelinePeriod>2025</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineSubtitle>{translations.casseProjectSubtitle}</TimelineSubtitle>
                  <TimelineText>
                  <p>{translations.casseProjectDesc1}</p> 
                  <p>{translations.casseProjectDesc2}</p>
                  <p>{translations.casseProjectDesc3}</p>
                  <p>{translations.casseProjectDesc4}</p>
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
              <SectionTitle>{translations.educationTitle}</SectionTitle>
              <TimelineContainer>
                <TimelineItem>
                  <TimelineHeader>
                    <FaGraduationCap className="icon" />
                    <TimelineTitle>{translations.fullstackDev}</TimelineTitle>
                    <TimelinePeriod>2024 - 2025</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineSubtitle>{translations.fullstackDevSubtitle}</TimelineSubtitle>
                  <TimelineText>
                  <p>{translations.fullstackDevDesc1}</p> 
                  <p>{translations.fullstackDevDesc2}</p>
                  <p>{translations.fullstackDevDesc3}</p>
                  </TimelineText>
                </TimelineItem>
                
                <TimelineItem>
                  <TimelineHeader>
                    <FaGraduationCap className="icon" />
                    <TimelineTitle>{translations.businessDegree}</TimelineTitle>
                    <TimelinePeriod>2025</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineSubtitle>{translations.businessDegreeSubtitle}</TimelineSubtitle>
                  <TimelineText>
                  <p>{translations.businessDegreeDesc1}</p> 
                  <p>{translations.businessDegreeDesc2}</p>
                  </TimelineText>
                </TimelineItem>
              </TimelineContainer>
            </motion.div>
          </AboutSection>
          
          <AboutSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <SectionTitle>{translations.certificationsTitle}</SectionTitle>
              <TimelineContainer>
                <TimelineItem>
                  <TimelineHeader>
                    <FaGraduationCap className="icon" />
                    <TimelineTitle>{translations.foundationsCS}</TimelineTitle>
                    <TimelinePeriod>2025</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineSubtitle>Holberton School</TimelineSubtitle>
                  <TimelineText>{translations.foundationsCSDesc}</TimelineText>
                  <CertificateActions>
                    <CertificateButton 
                      href="/portfolio-react/MVD-1024_Foundations of Computer Science_PýREZ_Jonathan.pdf" 
                      download="Foundations_Computer_Science_Certificate.pdf"
                    >
                      <FaDownload /> {translations.download || 'Descargar'}
                    </CertificateButton>
                  </CertificateActions>
                </TimelineItem>
                
                <TimelineItem>
                  <TimelineHeader>
                    <FaGraduationCap className="icon" />
                    <TimelineTitle>{translations.productManagementCert}</TimelineTitle>
                    <TimelinePeriod>2024</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineSubtitle>{translations.productManagementCertIssuer}</TimelineSubtitle>
                  <TimelineText>{translations.productManagementCertDesc}</TimelineText>
                  <CertificateActions>
                    <CertificateButton 
                      href="/portfolio-react/Coursera SEPTHZ7CQUC5.pdf" 
                      download="Product_Management_Certificate.pdf"
                    >
                      <FaDownload /> {translations.download || 'Descargar'}
                    </CertificateButton>
                  </CertificateActions>
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