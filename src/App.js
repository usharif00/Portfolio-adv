import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import ThemeProvider from './contexts/ThemeContext';
import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black dark:text-white">
        <Navbar />
        <Header />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Certificates />
        <Projects />
        
      </div>
    </ThemeProvider>
  );
}

export default App;
