import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const SkillsSection = styled.section`
  padding: 100px 20px;
  background: #f5f7fa;
  width: 100%;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const SkillCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  svg {
    font-size: 3rem;
    color: #0984e3;
    margin-bottom: 20px;
  }

  h3 {
    color: #2d3436;
    margin-bottom: 15px;
    font-size: 1.5rem;
  }

  p {
    color: #636e72;
    line-height: 1.6;
    margin-bottom: 20px;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e1e8ed;
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled(motion.div)<{ progress: number }>`
  width: ${props => props.progress}%;
  height: 100%;
  background: #0984e3;
  border-radius: 4px;
`;

const skills = [
  {
    icon: <FaReact />,
    title: 'Frontend Development',
    description: 'Proficient in React.js, TypeScript, and modern frontend frameworks. Experienced in building responsive and interactive user interfaces.',
    progress: 90,
  },
  {
    icon: <FaNodeJs />,
    title: 'Backend Development',
    description: 'Strong knowledge of Node.js, Express.js, and RESTful API development. Skilled in server-side programming and API integration.',
    progress: 85,
  },
  {
    icon: <FaDatabase />,
    title: 'Database Management',
    description: 'Experience with MongoDB, SQL databases, and data modeling. Proficient in database optimization and management.',
    progress: 80,
  },
  {
    icon: <FaHtml5 />,
    title: 'HTML5 & CSS3',
    description: 'Expert in semantic HTML, CSS3, and modern styling techniques. Skilled in creating responsive and accessible web designs.',
    progress: 95,
  },
  {
    icon: <FaJs />,
    title: 'JavaScript',
    description: 'Strong foundation in JavaScript, including ES6+ features, async programming, and modern development practices.',
    progress: 90,
  },
  {
    icon: <FaCss3Alt />,
    title: 'CSS Frameworks',
    description: 'Experience with CSS frameworks like Tailwind CSS, Material-UI, and styled-components. Skilled in custom styling and animations.',
    progress: 85,
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SkillsSection id="skills">
      <Container>
        <Title>Skills & Expertise</Title>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {skill.icon}
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <ProgressBar>
                <Progress
                  progress={skill.progress}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.progress}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                />
              </ProgressBar>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 