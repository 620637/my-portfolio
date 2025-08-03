// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const projectsData = [
  {
    title: 'Modern Website',
    description: 'Website adaptable to all devices, with ui components and animated interactions.',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
  {
    title: 'Online Store',
    description: 'Website adaptable to all devices, with ui components and animated interactions.',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
  {
    title: 'Brand Design',
    description: 'Website adaptable to all devices, with ui components and animated interactions.',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Website adaptable to all devices, with ui components and animated interactions.',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
   {
    title: 'Portfolio Website',
    description: 'Website adaptable to all devices, with ui components and animated interactions.',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
   {
    title: 'Portfolio Website',
    description: 'Website adaptable to all devices, with ui components and animated interactions.',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 min-h-screen container mx-auto px-8 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="text-4xl font-bold mb-4 text-center">Projects</h3>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12">
        Most recent work.
      </p>

      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-lg mb-4" 
              />
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <a 
                href={project.link} 
                className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <span>Demo</span>
                <Link size={16} />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default Projects;