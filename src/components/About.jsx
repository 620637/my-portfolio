// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpeg'; 

const About = () => {
  return (
    <motion.section
      id="about-me"
      className="py-20 min-h-screen container mx-auto px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
         {/* Use the imported image in the src attribute */}
          <div className="bg-gray-300 dark:bg-gray-700 h-96 rounded-lg overflow-hidden">
            <img 
              src={profileImage} 
              alt="About Me" 
              className="object-cover w-full h-full" 
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Hello, I am Uttam Kumar, a passionate web developer with handson experience in creating dynamic and user-friendly web applications. My expertise lies in building responsive and accessible interfaces using modern technologies.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I am dedicated to continuous learning and staying up-to-date with the latest trends and best practices in the web development world. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;