import React, { useState, useEffect, createContext } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import ThemeToggle from './components/layout/ThemeToggle';
import LanguageToggle from './components/layout/LanguageToggle';
import ScrollToTopButton from './components/layout/ScrollToTop';
import AIChat from './components/layout/AIChat';
import { translations } from './translations';
import './App.css';
import './darkMode.css';

// Create context for language
export const LanguageContext = createContext();

// ScrollToTop component to reset scroll position when route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en'); // Default language is English
  const [currentTranslations, setCurrentTranslations] = useState(translations.en);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    setCurrentTranslations(translations[newLanguage]);
  };

  return (
    <Router>
      <ScrollToTop />
      <LanguageContext.Provider value={{ language, translations: currentTranslations }}>
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
          <ScrollToTopButton />
          <AIChat />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </LanguageContext.Provider>
    </Router>
  );
}

export default App;