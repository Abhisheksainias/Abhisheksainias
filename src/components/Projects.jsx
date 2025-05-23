// File: src/components/Projects.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ECommerceCart from '../assets/E-CommerceCart.jpg';
import Eshoppy from '../assets/E-Shoopy.png'
import NoteApp from '../assets/Note-App.jpg'
import FantasyGame from '../assets/Fantasy-Game.png'
import Pokemon from '../assets/Pokemon.png'


const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'E-Shoppy',
            category: 'frontend',
            image: Eshoppy,
            description: 'A clean and responsive e-commerce frontend layout built using only **HTML** and **CSS**. This project showcases a modern UI for an online shopping platform, including product listings, banners, navigation bar, and footer',
            technologies: ['HTML', 'CSS'],
            liveLink: 'https://abhisheksainias.github.io/E-Shoppy/',
            githubLink: 'https://github.com/Abhisheksainias/E-Shoppy',
        },
        {
            id: 2,
            title: 'Note Application ',
            category: 'frontend',
            image: NoteApp,
            description: 'Built a note application with React, integrating features for creating, updating, and deleting notes. Designed an interactive UI with real-time data handling for seamless user experience. Applied performance optimization techniques to enhance app efficiency. ',
            technologies: ['React', 'JavaScript'],
            liveLink: 'https://example.com',
            githubLink: 'https://github.com/Abhisheksainias/Note-Application',
        },
        {
            id: 3,
            title: 'E-Cart',
            category: 'frontend',
            image: ECommerceCart,
            description: 'Developed an e-commerce cart using Redux Toolkit for state management in a React application. Implemented dynamic product addition, removal, and cart updates with optimized component rendering. Utilized React Styled Components for maintaining a modular and responsive web design. ',
            technologies: ['React', 'Redux-toolkit'],
            liveLink: 'https://zometocart.netlify.app/',
            githubLink: 'https://github.com/Abhisheksainias/Zomato-E-cart-Redux-toolkit',
        },
        {
            id: 4,
            title: 'Fantasy Game',
            category: 'fullstack',
            image: FantasyGame,
            description: 'Developed a fantasy game using the MERN stack, allowing users to create teams by selecting players. Designed a dynamic, user-friendly interface with Tailwind CSS for full responsiveness across devices. Built a robust back-end for player management with RESTful APIs, improving database management efficiency. ',
            technologies: ['React.js', 'Node.js', 'Express', 'MongoDB'],
            liveLink: 'https://abhishek-fantasy-gameapp.netlify.app/',
            githubLink: 'https://github.com/Abhisheksainias/Fantsay_Game',
        },
        {
            id: 5,
            title: 'Pokemon Explorer',
            category: 'frontend',
            image: Pokemon,
            description: 'Pokémon Explorer is a dynamic React-based web app that lets users search, explore, and view detailed stats of Pokémon using the PokéAPI. Designed with a clean UI, it offers an interactive and responsive user experience.',
            technologies: ['React', 'Live Api', 'Tailwind CSS'],
            liveLink: 'https://pokemon-explorer-ruby.vercel.app/',
            githubLink: 'https://github.com/Abhisheksainias/pokemon-explorer',
        },
        // {
        //     id: 5,
        //     title: 'Blog Platform',
        //     category: 'fullstack',
        //     image: '/api/placeholder/600/400',
        //     description: 'A blogging platform with rich text editing, user authentication, commenting, and social sharing.',
        //     technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Draft.js'],
        //     liveLink: 'https://example.com',
        //     githubLink: 'https://github.com/yourusername/blog-platform',
        // },
        // {
        //     id: 6,
        //     title: 'Real-time Chat Application',
        //     category: 'fullstack',
        //     image: '/api/placeholder/600/400',
        //     description: 'A real-time chat application with private messaging, group chats, and file sharing capabilities.',
        //     technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
        //     liveLink: 'https://example.com',
        //     githubLink: 'https://github.com/yourusername/chat-app',
        // },
    ];

    const filters = [
        { value: 'all', label: 'All Projects' },
        { value: 'frontend', label: 'Frontend' },
        { value: 'backend', label: 'Backend' },
        { value: 'fullstack', label: 'Full Stack' },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        My Projects
                    </motion.h2>
                    <motion.div
                        className="w-20 h-1 bg-indigo-600 mx-auto mb-6"
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    <motion.p
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Here are some of my recent projects. Each one represents a unique challenge and solution.
                    </motion.p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${activeFilter === filter.value
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl text-white font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors duration-200 text-sm font-medium"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 rounded transition-colors duration-200 text-sm font-medium"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;