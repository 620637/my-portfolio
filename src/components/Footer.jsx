// src/components/Footer.jsx
import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white py-8">
      <div className="container mx-auto px-8 flex flex-col items-center text-center">
        <div className="text-2xl font-bold mb-4">Uttam</div>
        <div className="flex space-x-6 mb-4">
          <a href="#about-me" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Me</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
        </div>
        <div className="flex space-x-4 mb-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Github size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Uttam Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;