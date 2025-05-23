// File: src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', level: 80 },
                { name: 'JavaScript', level: 75 },
                { name: 'HTML5', level: 95 },
                { name: 'CSS3', level: 90 },
                { name: 'Tailwind CSS', level: 70 },
                { name: 'Redux-Toolkit', level: 50 },
            ],
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', level: 65 },
                { name: 'Express.js', level: 70 },
                { name: 'MongoDB', level: 60 },
                // { name: 'RESTful APIs', level: 90 },
                // { name: 'GraphQL', level: 75 },
                // { name: 'JWT', level: 80 },
            ],
        },
        // {
        //     title: 'Tools & Others',
        //     skills: [
        //         { name: 'Git', level: 90 },
        //         { name: 'Webpack', level: 75 },
        //         { name: 'Jest', level: 80 },
        //         { name: 'Docker', level: 70 },
        //         { name: 'AWS', level: 65 },
        //         { name: 'Figma', level: 75 },
        //     ],
        // },
    ];

    return (
        <section id="skills" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        My Skills
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
                        Here's a look at my technical skills and proficiency levels in various technologies.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        >
                            <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="font-medium">{skill.name}</span>
                                            <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                                            <motion.div
                                                className="bg-indigo-600 h-2.5 rounded-full"
                                                style={{ width: `${skill.level}%` }}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.3 + (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-center">
                        <div className="text-4xl font-bold text-indigo-600 mb-2">1</div>
                        <div className="text-gray-600 dark:text-gray-400">Year Experience</div>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-center">
                        <div className="text-4xl font-bold text-indigo-600 mb-2">5</div>
                        <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-center">
                        <div className="text-4xl font-bold text-indigo-600 mb-2">-</div>
                        <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-center">
                        <div className="text-4xl font-bold text-indigo-600 mb-2">-</div>
                        <div className="text-gray-600 dark:text-gray-400">Open Source Contributions</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;