import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 2rem 0;
  text-align: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  margin: 0 1rem;
  color: var(--dark-color);
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
    transform: translateY(-5px);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #777;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer className="footer">
      <FooterContent>
        <SocialIcons>
          <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="mailto:tu@email.com">
            <FaEnvelope />
          </SocialIcon>
        </SocialIcons>
        <Copyright>
          &copy; {currentYear} My Professional Portfolio | All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;