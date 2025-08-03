// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, Github, FileText, Code } from 'lucide-react';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 min-h-screen container mx-auto px-8 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="text-4xl font-bold mb-4 text-center">Contact Me</h3>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12">
        Get in touch to discuss your project or just say hi.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Details Card */}
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h4 className="text-2xl font-bold mb-6">Contact Info</h4>
          <ul className="space-y-6">
            <li className="flex items-center space-x-4">
              <Phone size={24} className="text-blue-500" />
              <div>
                <p className="text-lg font-semibold">Call Me</p>
                <p className="text-gray-600 dark:text-gray-400">6206372776</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <Mail size={24} className="text-blue-500" />
              <div>
                <p className="text-lg font-semibold">Email</p>
                <p className="text-gray-600 dark:text-gray-400">uttam15vp@gmail.com</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <MapPin size={24} className="text-blue-500" />
              <div>
                <p className="text-lg font-semibold">Location</p>
                <p className="text-gray-600 dark:text-gray-400">Noida/Uttar-Pradesh/India</p>
              </div>
            </li>
          </ul>
          <div className="flex space-x-4 mt-8">
            <a href="https://www.linkedin.com/in/uttam-kumar-5b2255227/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
              <Linkedin size={32} />
            </a>
             <a href="https://drive.google.com/file/d/1fa7lA-f-SqmpZClGOWw5hRye2VL9L0Yp/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
              <FileText size={32} />
            </a>
            <a href="https://leetcode.com/u/Uttam_Kumar_165/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-yellow-600 transition-colors">
              <Code size={32} />
            </a>
            <a href="https://github.com/620637" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github size={32} />
            </a>
           
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="project" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Project
            </label>
            <textarea
              id="project"
              rows="4"
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;