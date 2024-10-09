import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const Description = styled.p`
  color: #555;
  margin: 1rem 0;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const LinkButton = styled.a`
  text-decoration: none;
  background-color: #1f1f1f;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffa500;
  }
`;

function ProjectCard({ title, description, github, website }) {
  return (
    <Card
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Links>
          <LinkButton href={github} target="_blank" rel="noopener noreferrer">GitHub</LinkButton>
          {website && <LinkButton href={website} target="_blank" rel="noopener noreferrer">Website</LinkButton>}
        </Links>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
