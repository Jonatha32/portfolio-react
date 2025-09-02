import React, { useState, useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { LanguageContext } from '../../App';
import { personalInfo, personalInfoEN, systemPrompt } from '../../data/personalInfo';

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
  font-size: 1.3rem;
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
  }
  
  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    font-size: 1.2rem;
  }
`;

const ChatWindow = styled(motion.div)`
  position: absolute;
  bottom: 60px;
  right: 0;
  width: 320px;
  height: 380px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 18px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  .dark-mode & {
    background: rgba(42, 42, 42, 0.95);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    width: calc(100vw - 50px);
    height: 350px;
    right: -10px;
  }
  
  @media (max-width: 480px) {
    width: calc(100vw - 30px);
    height: 320px;
    right: -15px;
  }
  
  @media (max-width: 360px) {
    width: calc(100vw - 20px);
    height: 300px;
    right: -10px;
  }
`;

const ChatHeader = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 18px 18px 0 0;
  flex-shrink: 0;
  
  @keyframes pulse {
    0%, 80%, 100% { opacity: 0.3; }
    40% { opacity: 1; }
  }
  
  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 0.85rem;
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 14px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  min-height: 0;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(102, 126, 234, 0.3);
    border-radius: 2px;
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    gap: 6px;
  }
`;

const Message = styled.div`
  padding: 8px 12px;
  border-radius: 14px;
  max-width: 85%;
  word-wrap: break-word;
  font-size: 0.8rem;
  line-height: 1.3;
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  ${props => props.isUser ? `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    align-self: flex-end;
    margin-left: auto;
    border-bottom-right-radius: 4px;
    box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);
  ` : `
    background: #f8f9fa;
    color: #2c3e50;
    align-self: flex-start;
    border-bottom-left-radius: 4px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
    
    .dark-mode & {
      background: #404040;
      color: #e1e1e1;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  `}
  
  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 0.75rem;
    max-width: 90%;
  }
`;

const ChatInput = styled.div`
  position: sticky;
  bottom: 0;
  padding: 12px 14px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 8px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  border-radius: 0 0 18px 18px;
  flex-shrink: 0;
  
  .dark-mode & {
    border-top-color: rgba(255, 255, 255, 0.1);
    background: rgba(42, 42, 42, 0.95);
  }
  
  @media (max-width: 480px) {
    padding: 10px 12px;
    gap: 6px;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  outline: none;
  background: rgba(255, 255, 255, 0.9);
  font-size: 0.8rem;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
    background: white;
  }
  
  .dark-mode & {
    background: rgba(64, 64, 64, 0.9);
    border-color: rgba(255, 255, 255, 0.2);
    color: white;
    
    &:focus {
      background: #404040;
      border-color: #667eea;
    }
  }
  
  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 0.75rem;
  }
`;

const SendButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);
  font-size: 0.8rem;
  
  &:hover:not(:disabled) {
    transform: scale(1.05);
    box-shadow: 0 3px 8px rgba(102, 126, 234, 0.4);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 0.7rem;
  }
`;



const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const { language, translations } = useContext(LanguageContext);
  const messagesEndRef = useRef(null);
  
  // Cargar historial del localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem('aiChatHistory');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);
  
  // Guardar historial en localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('aiChatHistory', JSON.stringify(messages.slice(-10))); // Solo últimos 10
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getRelevantInfo = (message) => {
    const msg = message.toLowerCase();
    let info = {};
    
    // Detectar qué información necesita
    if (msg.includes('habilidades') || msg.includes('skills') || msg.includes('tecnolog') || msg.includes('program') || msg.includes('sabe')) {
      info.skills = personalInfo.education.skills;
      info.softSkills = personalInfo.education.softSkills;
    }
    
    if (msg.includes('proyecto') || msg.includes('project') || msg.includes('cassé') || msg.includes('airbnb') || msg.includes('shell')) {
      info.projects = personalInfo.projects;
    }
    
    if (msg.includes('música') || msg.includes('music') || msg.includes('cantar') || msg.includes('cantautor')) {
      info.music = personalInfo.music;
    }
    
    if (msg.includes('estudia') || msg.includes('educación') || msg.includes('education') || msg.includes('holberton') || msg.includes('universidad')) {
      info.education = personalInfo.education.current;
    }
    
    if (msg.includes('contacto') || msg.includes('contact') || msg.includes('email') || msg.includes('trabajo') || msg.includes('work')) {
      info.contact = personalInfo.contact;
    }
    
    if (msg.includes('valores') || msg.includes('values') || msg.includes('personalidad') || msg.includes('interests') || msg.includes('intereses')) {
      info.personality = personalInfo.personality;
    }
    
    if (msg.includes('quién') || msg.includes('who') || msg.includes('jonathan') || msg.includes('jona') || msg.includes('perfil') || msg.includes('profile')) {
      info.basic = personalInfo.basic;
    }
    
    // Si no detecta nada específico, incluir info básica
    if (Object.keys(info).length === 0) {
      info.basic = personalInfo.basic;
    }
    
    return JSON.stringify(info, null, 2);
  };

  const getRelevantInfoEN = (message) => {
    const msg = message.toLowerCase();
    let info = {};
    
    if (msg.includes('skills') || msg.includes('technolog') || msg.includes('program') || msg.includes('know')) {
      info.skills = personalInfoEN.education.skills;
      info.softSkills = personalInfoEN.education.softSkills;
    }
    
    if (msg.includes('project') || msg.includes('cassé') || msg.includes('airbnb') || msg.includes('shell')) {
      info.projects = personalInfoEN.projects;
    }
    
    if (msg.includes('music') || msg.includes('sing') || msg.includes('song')) {
      info.music = personalInfoEN.music;
    }
    
    if (msg.includes('stud') || msg.includes('education') || msg.includes('holberton') || msg.includes('university')) {
      info.education = personalInfoEN.education.current;
    }
    
    if (msg.includes('contact') || msg.includes('email') || msg.includes('work')) {
      info.contact = personalInfoEN.contact;
    }
    
    if (msg.includes('values') || msg.includes('personality') || msg.includes('interests')) {
      info.personality = personalInfoEN.personality;
    }
    
    if (msg.includes('who') || msg.includes('jonathan') || msg.includes('jona') || msg.includes('profile')) {
      info.basic = personalInfoEN.basic;
    }
    
    if (Object.keys(info).length === 0) {
      info.basic = personalInfoEN.basic;
    }
    
    return JSON.stringify(info, null, 2);
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setIsLoading(true);
    setIsTyping(true);

    const isEnglish = /\b(what|who|how|where|when|why|hello|hi|thanks|project|skill|can|do|does|tell|me|about)\b/i.test(userMessage);
    const isSpanish = /[ñáéíóúü¿¡]/i.test(userMessage) || 
      /\b(qué|quién|cómo|dónde|cuándo|por qué|hola|gracias|proyecto|habilidad|cuéntame|sobre)\b/i.test(userMessage);
    
    const languageInstruction = isEnglish && !isSpanish ? 'RESPOND IN ENGLISH.' : 'RESPONDE EN ESPAÑOL.';
    const relevantInfo = isEnglish && !isSpanish ? getRelevantInfoEN(userMessage) : getRelevantInfo(userMessage);

    try {
      const apiKey = process.env.REACT_APP_GROQ_API_KEY;
      
      if (!apiKey) {
        setMessages(prev => [...prev, { 
          text: 'Error: API key no configurada. Contacta al desarrollador.',
          isUser: false 
        }]);
        setIsLoading(false);
        setIsTyping(false);
        return;
      }

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            {
              role: 'system',
              content: `${systemPrompt}

${languageInstruction}

IMPORTANTE: 
- Responde de forma concisa y completa
- No dejes frases inconclusas
- Máximo 60 palabras
- Sé natural y conversacional
- Si no sabes algo, dilo claramente

DATOS DE JONATHAN:
${relevantInfo}`
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          temperature: 0.2,
          max_tokens: 80,
          top_p: 0.9,
          frequency_penalty: 0.3,
          presence_penalty: 0.1,
          stop: ['\n\n', '...']
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error de API:', errorData);
        
        let errorMessage = 'Error de conexión con la IA';
        if (response.status === 401) {
          errorMessage = 'API key inválida o expirada';
        } else if (response.status === 429) {
          errorMessage = 'Límite de uso excedido, intenta más tarde';
        } else if (errorData.error?.message) {
          errorMessage = errorData.error.message;
        }
        
        setMessages(prev => [...prev, { 
          text: errorMessage,
          isUser: false 
        }]);
        setIsLoading(false);
        setIsTyping(false);
        return;
      }

      const data = await response.json();
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        // Simular typing delay
        setTimeout(() => {
          setMessages(prev => [...prev, { text: data.choices[0].message.content, isUser: false }]);
          setIsTyping(false);
        }, 800);
      } else {
        setMessages(prev => [...prev, { 
          text: 'Error: Respuesta inesperada de la IA',
          isUser: false 
        }]);
        setIsTyping(false);
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: translations.aiConnectionError || 'Error de conexión',
        isUser: false 
      }]);
      setIsTyping(false);
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
                {translations.aiAssistant || 'F3nix AI'}
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                {messages.length > 0 && (
                  <button 
                    onClick={() => {
                      setMessages([]);
                      localStorage.removeItem('aiChatHistory');
                    }}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: 'white', 
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      opacity: 0.8
                    }}
                    title="Limpiar chat"
                  >
                    🗑️
                  </button>
                )}
                <button 
                  onClick={() => setIsOpen(false)}
                  style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                >
                  <FaTimes />
                </button>
              </div>
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
              {isTyping && (
                <Message isUser={false}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>Escribiendo</span>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor', animation: 'pulse 1.4s infinite' }}></div>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor', animation: 'pulse 1.4s infinite 0.2s' }}></div>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor', animation: 'pulse 1.4s infinite 0.4s' }}></div>
                    </div>
                  </div>
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