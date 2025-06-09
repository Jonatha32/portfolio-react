import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  padding: 120px 0 80px;
`;

const ProjectsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ProjectsHeader = styled.div`
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? '#fff' : 'var(--dark-color)'};
  border: 1px solid ${props => props.active ? 'var(--primary-color)' : '#ddd'};
  padding: 8px 20px;
  margin: 0 5px 10px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary-color)' : '#f0f0f0'};
  }
  
  .dark-mode & {
    color: ${props => props.active ? '#fff' : 'var(--light-color)'};
    border: 1px solid ${props => props.active ? 'var(--primary-color)' : '#444'};
    
    &:hover {
      background: ${props => props.active ? 'var(--primary-color)' : '#333'};
    }
  }
`;

const SearchContainer = styled.div`
  max-width: 500px;
  margin: 0 auto 40px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  padding-left: 45px;
  border: 1px solid #ddd;
  border-radius: 30px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
  }
  
  .dark-mode & {
    background-color: #2a2a2a;
    border-color: #444;
    color: #fff;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
  
  .dark-mode & {
    color: #aaa;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
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
  height: 300px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    align-items: center
    object-fit: cover;
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

const NoResults = styled.div`
  text-align: center;
  padding: 50px 0;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  p {
    color: #777;
    
    .dark-mode & {
      color: #aaa;
    }
  }
`;

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const projects = [
    {
      id: 1,
      title: 'Cassé',
      description: 'App for buying and selling used electronic products that promotes the circular economy and recycling',
      image: process.env.PUBLIC_URL + "/cassee.png",
      tags: ['Flutter', 'Dart', 'Firebase'],
      category: 'mobile',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 2,
      title: 'HBNB Clone',
      description: 'AirBNB clone (Holberton second quarter final project)',
      image: process.env.PUBLIC_URL + "/hbnb.png",
      tags: ['Python', 'MySQL'],
      category: 'backend',
      github: 'https://github.com/Ifabri31/holbertonschool-hbnb',
      demo: 'https://demo.com'
    },
  ];
  
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredProjects = projects.filter(project => {
    // Filter by category
    if (filter !== 'all' && project.category !== filter) {
      return false;
    }
    
    // Filter by search term
    if (searchTerm && !project.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !project.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) {
      return false;
    }
    
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsContainer>
        <ProjectsContent>
          <ProjectsHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>My Projects</h1>
              <p>
                Explore the projects I've worked on recently
              </p>
            </motion.div>
          </ProjectsHeader>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SearchContainer>
              <SearchIcon>
                <FaSearch />
              </SearchIcon>
              <SearchInput 
                type="text" 
                placeholder="Search projects..." 
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </SearchContainer>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FilterContainer>
              <FilterButton 
                active={filter === 'all'} 
                onClick={() => handleFilterChange('all')}
              >
                All
              </FilterButton>
              <FilterButton 
                active={filter === 'frontend'} 
                onClick={() => handleFilterChange('frontend')}
              >
                Frontend
              </FilterButton>
              <FilterButton 
                active={filter === 'backend'} 
                onClick={() => handleFilterChange('backend')}
              >
                Backend
              </FilterButton>
              <FilterButton 
                active={filter === 'fullstack'} 
                onClick={() => handleFilterChange('fullstack')}
              >
                Full Stack
              </FilterButton>
              <FilterButton 
                active={filter === 'mobile'} 
                onClick={() => handleFilterChange('mobile')}
              >
                Mobile
              </FilterButton>
            </FilterContainer>
          </motion.div>
          
          {filteredProjects.length > 0 ? (
            <ProjectsGrid>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
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
          ) : (
            <NoResults>
              <h3>No projects found</h3>
              <p>Try another search or filter</p>
            </NoResults>
          )}
        </ProjectsContent>
      </ProjectsContainer>
    </motion.div>
  );
};

export default Projects;