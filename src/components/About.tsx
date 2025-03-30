import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';

const AboutSection = styled.section`
  padding: 100px 20px;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div`
  h2 {
    font-size: 2.5rem;
    color: #2d3436;
    margin-bottom: 30px;
  }

  p {
    font-size: 1.1rem;
    color: #636e72;
    line-height: 1.8;
    margin-bottom: 20px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const SkillCard = styled(motion.div)`
  background: #f5f7fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    color: #2d3436;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: #636e72;
      margin-bottom: 5px;
    }
  }
`;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <AboutSection id="about">
      <Container>
        <Content>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2>About Me</h2>
            <p>
              I'm a passionate Full Stack Developer with a strong foundation in both
              front-end and back-end development. With several years of experience
              in building web applications, I specialize in creating scalable and
              user-friendly solutions.
            </p>
            <p>
              My journey in software development started with a curiosity about how
              things work on the internet. Today, I'm proficient in various
              technologies and frameworks, always eager to learn new tools and
              methodologies to stay at the forefront of web development.
            </p>
          </motion.div>
        </Content>
        <SkillsGrid>
          <SkillCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Frontend</h3>
            <ul>
              <li>React.js</li>
              <li>TypeScript</li>
              <li>HTML5 & CSS3</li>
              <li>Responsive Design</li>
              <li>State Management</li>
            </ul>
          </SkillCard>
          <SkillCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>RESTful APIs</li>
              <li>Authentication</li>
            </ul>
          </SkillCard>
        </SkillsGrid>
      </Container>
    </AboutSection>
  );
};

export default About; 