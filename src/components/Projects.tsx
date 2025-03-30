import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 100px 20px;
  background: #f5f7fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #2d3436;
  margin-bottom: 50px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: #ddd;
  background-size: cover;
  background-position: center;
`;

const ProjectContent = styled.div`
  padding: 20px;

  h3 {
    color: #2d3436;
    margin-bottom: 10px;
  }

  p {
    color: #636e72;
    margin-bottom: 20px;
    line-height: 1.6;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  background: #e1e8ed;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9rem;
  color: #2d3436;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const LinkButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  color: #0984e3;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #0769b5;
  }
`;

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
    image: 'https://via.placeholder.com/400x200',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://via.placeholder.com/400x200',
    technologies: ['React', 'Firebase', 'Material-UI', 'Framer Motion'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with React and Framer Motion, featuring smooth animations and responsive design.',
    image: 'https://via.placeholder.com/400x200',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Styled Components'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ProjectsSection id="projects">
      <Container>
        <Title>My Projects</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ProjectImage style={{ backgroundImage: `url(${project.image})` }} />
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <TechStack>
                  {project.technologies.map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <LinkButton
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> GitHub
                  </LinkButton>
                  <LinkButton
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </LinkButton>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 