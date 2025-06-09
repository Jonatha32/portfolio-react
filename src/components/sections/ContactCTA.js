import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContactContainer = styled.section`
  padding: 100px 0;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: #fff;
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContactText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const ContactButton = styled(Link)`
  background-color: #fff;
  color: var(--primary-color);
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ContactCTA = () => {
  return (
    <ContactContainer>
      <ContactContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ContactTitle>Interested in working together?</ContactTitle>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactText>
            I am open to freelance opportunities, collaborations, and full-time positions. If you have a project in mind or just want to chat, please don't hesitate to contact me!
          </ContactText>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ContactButton to="/contact">
            Contact me
          </ContactButton>
        </motion.div>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactCTA;