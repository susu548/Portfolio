import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(motion.div)`
  font-size: 24px;
  font-weight: bold;
  color: #2d3436;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const NavLink = styled(motion.a)`
  text-decoration: none;
  color: #2d3436;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #0984e3;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 30px;
`;

const Icon = styled(motion.a)`
  color: #2d3436;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #0984e3;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sujeet Chaudhary
      </Logo>
      <NavLinks>
        <NavLink
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </NavLink>
        <NavLink
          href="#projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Projects
        </NavLink>
        <NavLink
          href="#skills"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Skills
        </NavLink>
        <NavLink
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </NavLink>
        <SocialIcons>
          <Icon
            href="https://github.com"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </Icon>
          <Icon
            href="https://linkedin.com"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </Icon>
          <Icon
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
          </Icon>
        </SocialIcons>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 