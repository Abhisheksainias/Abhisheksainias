// File: src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.h2
                        className=" text-white text-3xl font-bold "
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        About Me
                    </motion.h2>
                    <motion.div
                        className="w-20 h-1 bg-indigo-600 mx-auto mb-6"
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="order-2 md:order-1"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className=" font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text text-2xl font-semibold mb-4">MERN Stack Developer with a passion for creating elegant solutions</h3>
                        {/* <p className="text-gray-600 dark:text-gray-400 mb-4">
                            I'm a full-stack developer specializing in building modern web applications using MongoDB, Express.js, React, and Node.js.
                            With a strong foundation in both frontend and backend technologies, I create seamless, user-friendly experiences that solve real-world problems.
                        </p> */}
                        <p className='text-gray-600 dark:text-gray-400 mb-4'>
                            I am a Full-Stack developer based in Ajmer, India. I am an Information Technology undergraduate from Engineering College Ajmer. I am very passionate about improving my coding skills & developing applications & websites</p>

                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            My journey in web development began 1 years ago, and I've since worked on a variety of projects, from e-commerce platforms to social media applications.
                            I'm passionate about clean code, responsive design, and creating intuitive user interfaces.
                        </p>
                        {/* <p className="text-gray-600 dark:text-gray-400">
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or hiking in the great outdoors.
                        </p> */}

                        <div className="mt-8">
                            <h4 className=" text-2xl font-semibold mb-3  font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Education</h4>
                            <div className="mb-3">
                                <p className=" text-white font-medium">Bachelor of Technology in Information Technology</p>
                                <p className="text-gray-600 dark:text-gray-400">Engineering College Ajmer, 2020-2024</p>
                            </div>
                            {/* <div>
                                <p className="text-white font-medium">Full Stack Web Development Bootcamp</p>
                                <p className="text-gray-600 dark:text-gray-400">Coding Academy, 2022</p>
                            </div> */}
                        </div>
                    </motion.div>

                    <motion.div
                        className="order-1 md:order-2 flex justify-center"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="relative">
                            <div className="w-72 h-72 md:w-96 md:h-96 bg-indigo-600 rounded-lg absolute -bottom-4 -right-4 z-0"></div>
                            <div className="w-72 h-72 md:w-96 md:h-96 rounded-lg overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg relative z-10">
                                <img
                                    src="/public/About.jpg" // Replace with your image path
                                    alt="Your Name - Abhishek Saini"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;