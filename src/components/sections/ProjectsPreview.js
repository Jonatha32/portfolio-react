import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ProjectsContainer = styled.section`
  padding: 100px 0;
  background-color: #fff;
  
  .dark-mode & {
    background-color: #121212;
  }
`;

const ProjectsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.div`
  text-align: center;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    
    .project-image img {
      transform: scale(1.05);
    }
  }
  
  .dark-mode & {
    background-color: #2a2a2a;
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: center;
    transition: transform 0.5s ease;
  }
`;

const ProjectInfo = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: #777;
  margin-bottom: 15px;
  
  .dark-mode & {
    color: #aaa;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  gap: 5px;
`;

const ProjectTag = styled.span`
  background-color: #f0f0f0;
  color: var(--primary-color);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  
  .dark-mode & {
    background-color: #333;
    color: #fff;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  color: var(--dark-color);
  font-weight: 500;
  
  svg {
    margin-right: 5px;
  }
  
  &:hover {
    color: var(--primary-color);
  }
  
  .dark-mode & {
    color: var(--light-color);
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const MoreButton = styled(Link)`
  display: inline-block;
  text-align: center;
  margin: 30px auto;
  padding: 12px 30px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    background-color: var(--primary-color-dark, #0056b3);
  }
`;

const ProjectsPreview = () => {
  const projects = [
    {
      id: 1,
      title: 'Cassé',
      description: 'App for buying and selling used electronic products that promotes the circular economy and recycling',
      image: "https://raw.githubusercontent.com/Jonatha32/portfolio-react/main/public/cassee.png",
      tags: ['Flutter', 'Dart', 'Firebase'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 2,
      title: 'HBNB Clone',
      description: 'AirBNB clone (Holberton second quarter final project)',
      image: "https://raw.githubusercontent.com/Jonatha32/portfolio-react/main/public/hbnb.png",
      tags: ['Python', 'MySQL'],
      github: 'https://github.com/Jonatha32/holbertonschool-hbnb',
      demo: 'https://demo.com'
    },
  ];

  return (
    <ProjectsContainer>
      <ProjectsContent>
        <SectionTitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>My Projects</h2>
            <p>
              These are some of the projects I have worked on recently.
            </p>
          </motion.div>
        </SectionTitle>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard>
                <ProjectImage className="project-image">
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTags>
                    {project.tags.map(tag => (
                      <ProjectTag key={tag}>{tag}</ProjectTag>
                    ))}
                  </ProjectTags>
                  <ProjectLinks>
                    <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> GitHub
                    </ProjectLink>
                    <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Demo
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectInfo>
              </ProjectCard>
            </motion.div>
          ))}
        </ProjectsGrid>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <MoreButton to="/projects" className="btn">
            View all projects
          </MoreButton>
        </motion.div>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default ProjectsPreview;