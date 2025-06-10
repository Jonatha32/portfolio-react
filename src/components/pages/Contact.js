import React, { useState, useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { LanguageContext } from '../../App';

const ContactContainer = styled.div`
  padding: 120px 0 80px;
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContactHeader = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 10px;
  padding: 40px;
  height: fit-content;
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 15px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: #fff;
  }
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .icon {
    font-size: 1.5rem;
    margin-right: 15px;
    margin-top: 5px;
  }
`;

const ContactInfoContent = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 5px;
  }
  
  p {
    font-size: 1rem;
    opacity: 0.8;
  }
`;

const ContactForm = styled.form`
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  .dark-mode & {
    background-color: #2a2a2a;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
  }
  
  .dark-mode & {
    background-color: #333;
    border-color: #444;
    color: #fff;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
  }
  
  .dark-mode & {
    background-color: #333;
    border-color: #444;
    color: #fff;
  }
`;

const FormButton = styled.button`
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  
  svg {
    margin-right: 8px;
  }
  
  &:hover {
    background-color: #5952d4;
    transform: translateY(-3px);
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Alert = styled.div`
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: ${props => props.success ? '#d4edda' : '#f8d7da'};
  color: ${props => props.success ? '#155724' : '#721c24'};
  border: 1px solid ${props => props.success ? '#c3e6cb' : '#f5c6cb'};
`;

const Contact = () => {
  const form = useRef();
  const { translations } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Mapear los nombres de los campos del formulario a las propiedades del estado
    const fieldNameMap = {
      'user_name': 'name',
      'user_email': 'email',
      'subject': 'subject',
      'message': 'message'
    };
    
    const stateField = fieldNameMap[name] || name;
    
    setFormData(prevData => ({
      ...prevData,
      [stateField]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Enviar email usando EmailJS
    emailjs.sendForm(
      'service_wwgmucv', // Reemplaza con tu Service ID de EmailJS
      'template_hmzgdd5', // Reemplaza con tu Template ID de EmailJS
      form.current,
      'xUSG6oi1Qhviy8fcy' // Reemplaza con tu Public Key de EmailJS
    )
    .then((result) => {
      setStatus({
        submitted: true,
        success: true,
        message: translations.messageSent
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setLoading(false);
    }, (error) => {
      setStatus({
        submitted: true,
        success: false,
        message: translations.messageError
      });
      setLoading(false);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContactContainer>
        <ContactContent>
          <ContactHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>{translations.contactPageTitle}</h1>
              <p>
                {translations.contactPageDescription}
              </p>
            </motion.div>
          </ContactHeader>
          
          <ContactGrid>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactInfo>
                <ContactTitle>{translations.contactInfo}</ContactTitle>
                
                <ContactInfoItem>
                  <FaEnvelope className="icon" />
                  <ContactInfoContent>
                    <h4>{translations.email}</h4>
                    <p>jonaperez038@gmail.com</p>
                  </ContactInfoContent>
                </ContactInfoItem>
                
                <ContactInfoItem>
                  <FaPhone className="icon" />
                  <ContactInfoContent>
                    <h4>{translations.phone}</h4>
                    <p>+598 92 934 394</p>
                  </ContactInfoContent>
                </ContactInfoItem>
                
                <ContactInfoItem>
                  <FaMapMarkerAlt className="icon" />
                  <ContactInfoContent>
                    <h4>{translations.location}</h4>
                    <p>Canelones, Uruguay</p>
                  </ContactInfoContent>
                </ContactInfoItem>
              </ContactInfo>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ContactForm ref={form} onSubmit={handleSubmit}>
                {status.submitted && (
                  <Alert success={status.success}>
                    {status.message}
                  </Alert>
                )}
                
                <FormRow>
                  <FormGroup>
                    <FormLabel htmlFor="name">{translations.formName}</FormLabel>
                    <FormInput 
                      type="text" 
                      id="name" 
                      name="user_name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="email">{translations.email}</FormLabel>
                    <FormInput 
                      type="email" 
                      id="email" 
                      name="user_email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </FormGroup>
                </FormRow>
                
                <FormGroup>
                  <FormLabel htmlFor="subject">{translations.subject}</FormLabel>
                  <FormInput 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="message">{translations.message}</FormLabel>
                  <FormTextarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  />
                </FormGroup>
                
                <FormButton type="submit" disabled={loading}>
                  {loading ? translations.sending : (
                    <>
                      <FaPaperPlane /> {translations.sendMessage}
                    </>
                  )}
                </FormButton>
              </ContactForm>
            </motion.div>
          </ContactGrid>
        </ContactContent>
      </ContactContainer>
    </motion.div>
  );
};

export default Contact;