// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University of Technology, India',
    duration: '2019 - 2023',
    description: 'Specialized in Software Engineering and Artificial Intelligence.',
    percentage: '8.5 CGPA',
    side: 'left', // 1st entry on the left
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Delhi Public School',
    duration: '2017 - 2019',
    description: 'Focused on Mathematics, Physics, and Computer Science.',
    percentage: '90%',
    side: 'right', // 2nd entry on the right
  },
  {
    degree: 'High School Diploma',
    institution: 'Delhi Public School',
    duration: '2017 - 2019',
    description: 'Focused on Mathematics, Physics, and Computer Science.',
    percentage: '88%',
    side: 'left', // 3rd entry on the left
  },
];

const Education = () => {
  return (
    <motion.section
      id="education"
      className="py-20 min-h-screen container mx-auto px-8 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="text-4xl font-bold mb-12 text-center">Education</h3>
      <div className="relative">
        <div className="border-l-2 border-blue-500 dark:border-blue-400 absolute h-full left-1/2 -ml-0.5 hidden md:block"></div>
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className={`mb-8 flex justify-between items-center w-full relative ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, x: item.side === 'right' ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className={`w-full md:w-1/2 ${item.side === 'right' ? 'md:pl-16 text-left' : 'md:pr-16 text-right'}`}>
              <h4 className="text-2xl font-semibold">{item.degree}</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">{item.institution}</p>
              <p className="text-sm text-gray-500">{item.duration}</p>
              <p className="text-md font-medium text-blue-600 dark:text-blue-400 mt-2">{item.percentage}</p>
              <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
            </div>
            <div className="hidden md:flex absolute w-10 h-10 -ml-5 left-1/2 justify-center items-center rounded-full bg-blue-500 dark:bg-blue-400 text-white">
              <GraduationCap size={24} />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;