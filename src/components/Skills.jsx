// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Placeholder icons from Lucide React
import { Code, Server, Figma } from 'lucide-react';

const skillsData = {
  frontend: [
    { name: 'HTML', icon: Code, level: '90%' },
    { name: 'CSS', icon: Code, level: '80%' },
    { name: 'JavaScript', icon: Code, level: '70%' },
    { name: 'React', icon: Code, level: '85%' },
  ],
  backend: [
    { name: 'Node.js', icon: Server, level: '75%' },
    { name: 'Python', icon: Server, level: '65%' },
    { name: 'MongoDB', icon: Server, level: '80%' },
    { name: 'Express', icon: Server, level: '70%' },
  ],
  designer: [
    { name: 'Figma', icon: Figma, level: '90%' },
    { name: 'Photoshop', icon: Figma, level: '85%' },
  ]
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 min-h-screen container mx-auto px-8 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="text-4xl font-bold mb-12 text-center">Skills</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.keys(skillsData).map(category => (
          <motion.div
            key={category}
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h4 className="text-2xl font-bold mb-4 capitalize">{category}</h4>
            <ul className="space-y-4">
              {skillsData[category].map((skill, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <skill.icon size={24} className="text-blue-500" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-lg">{skill.name}</span>
                      <span className="text-sm font-semibold">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;