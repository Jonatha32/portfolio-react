import React, { useState, useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { LanguageContext } from '../../App';
import { personalInfo, systemPrompt } from '../../data/personalInfo';

const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 140px;
  z-index: 1000;
  
  @media (max-width: 768px) {
    right: 20px;
    bottom: 80px;
  }
`;

const ChatButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }
`;

const ChatWindow = styled(motion.div)`
  position: absolute;
  bottom: 60px;
  right: 0;
  width: 350px;
  height: 450px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  .dark-mode & {
    background: #2a2a2a;
    color: white;
  }
  
  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    height: 400px;
    right: -10px;
  }
  
  @media (max-width: 480px) {
    width: calc(100vw - 20px);
    height: 350px;
    right: -20px;
  }
`;

const ChatHeader = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

const Message = styled.div`
  padding: 10px 12px;
  border-radius: 12px;
  max-width: 80%;
  word-wrap: break-word;
  
  ${props => props.isUser ? `
    background: #667eea;
    color: white;
    align-self: flex-end;
    margin-left: auto;
  ` : `
    background: #f1f1f1;
    color: #333;
    align-self: flex-start;
    
    .dark-mode & {
      background: #404040;
      color: white;
    }
  `}
`;

const ChatInput = styled.div`
  padding: 15px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 10px;
  
  .dark-mode & {
    border-top-color: #444;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
  
  .dark-mode & {
    background: #404040;
    border-color: #555;
    color: white;
  }
`;

const SendButton = styled.button`
  background: #667eea;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;



const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { language, translations } = useContext(LanguageContext);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getRelevantInfo = (message) => {
    const msg = message.toLowerCase();
    const keywords = {
      profile: ['quién', 'who', 'jonathan', 'jona', 'perfil', 'profile'],
      projects: ['proyectos', 'projects', 'cassé', 'airbnb', 'shell'],
      music: ['música', 'music', 'cantautor', 'singer', 'cantar'],
      tech: ['tecnologías', 'technologies', 'skills', 'habilidades', 'programar'],
      contact: ['contacto', 'contact', 'email', 'trabajo', 'work']
    };

    let relevantInfo = '';
    
    if (keywords.profile.some(k => msg.includes(k))) {
      relevantInfo += `Profile: ${personalInfo.basic.name} (${personalInfo.basic.nickname}), ${personalInfo.basic.profession} from ${personalInfo.basic.location}. `;
    }
    if (keywords.projects.some(k => msg.includes(k))) {
      relevantInfo += `Projects: Cassé (Flutter app for circular economy), AirBNB Clone (Python/MySQL), Simple Shell (C). `;
    }
    if (keywords.music.some(k => msg.includes(k))) {
      relevantInfo += `Music: ${personalInfo.music.role} - ${personalInfo.music.description}. Influences: ${personalInfo.music.influences.join(', ')}. `;
    }
    if (keywords.tech.some(k => msg.includes(k))) {
      relevantInfo += `Technologies: ${personalInfo.education.skills.join(', ')}. `;
    }
    if (keywords.contact.some(k => msg.includes(k))) {
      relevantInfo += `Contact: ${personalInfo.contact.email}. Available for: ${personalInfo.contact.available}. `;
    }

    return relevantInfo;
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setIsLoading(true);

    const relevantInfo = getRelevantInfo(userMessage);
    const isSpanish = /[ñáéíóúü¿¡]/i.test(userMessage) || ['qué', 'quién', 'cómo', 'dónde', 'cuándo', 'por qué'].some(w => userMessage.toLowerCase().includes(w));

    try {
      // URL del backend en Vercel (cambiar por tu dominio de Vercel)
      const apiUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:3000/api/chat'
        : 'https://portfolio-backend-jonatha32.vercel.app/api/chat';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          personalInfo,
          systemPrompt
        })
      });

      const data = await response.json();
      setMessages(prev => [...prev, { text: data.response, isUser: false }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: translations.aiConnectionError,
        isUser: false 
      }]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <ChatContainer>
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <ChatHeader>
              <div>
                <FaRobot style={{ marginRight: '8px' }} />
                {translations.aiAssistant}
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
              >
                <FaTimes />
              </button>
            </ChatHeader>
            
            <ChatMessages>
              {messages.length === 0 && (
                <Message isUser={false}>
                  {translations.aiGreeting}
                </Message>
              )}
              {messages.map((message, index) => (
                <Message key={index} isUser={message.isUser}>
                  {message.text}
                </Message>
              ))}
              {isLoading && (
                <Message isUser={false}>
                  {translations.typing}
                </Message>
              )}
              <div ref={messagesEndRef} />

            </ChatMessages>
            
            <ChatInput>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={translations.typeMessage}
                disabled={isLoading}
              />
              <SendButton onClick={sendMessage} disabled={isLoading || !inputValue.trim()}>
                <FaPaperPlane />
              </SendButton>
            </ChatInput>
          </ChatWindow>
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ChatButton onClick={() => setIsOpen(!isOpen)}>
          <FaRobot />
        </ChatButton>
      </motion.div>
    </ChatContainer>
  );
};

export default AIChat;