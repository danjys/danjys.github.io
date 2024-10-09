import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

// Container for the entire Projects page
const ProjectsContainer = styled.div`
  background-color: #f0f0f0;
  padding: 3rem 1rem;
  text-align: center;
  min-height: 100vh;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #333;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const projectData = [
  {
    title: 'Project 1',
    description: 'An awesome project that does amazing things.',
    github: 'https://github.com/user/project1',
    website: 'https://project1.com'
  },
  {
    title: 'Project 2',
    description: 'A project focused on performance and scalability.',
    github: 'https://github.com/user/project2',
    website: 'https://project2.com'
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        My Projects
      </Title>
      <Grid>
        {projectData.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            github={project.github}
            website={project.website}
          />
        ))}
      </Grid>
    </ProjectsContainer>
  );
};

export default Projects;
