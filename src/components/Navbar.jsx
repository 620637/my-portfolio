// src/components/Navbar.jsx
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 backdrop-filter backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        {/* Your Name/Logo on the left */}
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          Uttam
        </div>

        {/* Desktop Navigation Links and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-600 dark:text-gray-300">
            <li>
              <a href="#herosection" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Home</a>
            </li>
            <li>
              <a href="#about-me" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">About Me</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Skills</a>
            </li>
            <li>
              <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Education</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Contact</a>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-900 dark:text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 py-4 text-gray-900 dark:text-white">
          <li>
            <a href="#herosection" onClick={handleLinkClick} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Home</a>
          </li>
          <li>
            <a href="#about-me" onClick={handleLinkClick} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">About Me</a>
          </li>
          <li>
            <a href="#skills" onClick={handleLinkClick} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Skills</a>
          </li>
          <li>
            <a href="#education" onClick={handleLinkClick} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Education</a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;