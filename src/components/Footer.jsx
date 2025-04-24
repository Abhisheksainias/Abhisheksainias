import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mb-4">
                            Abhishek
                        </h3>
                        <p className="text-gray-400 mb-4 max-w-md">
                            A passionate MERN stack developer focused on creating efficient, scalable, and user-friendly web applications.
                        </p>
                        <div className="flex space-x-4">
                            {/* GitHub */}
                            <a
                                href="https://github.com/Abhisheksainias"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 012.5-.34c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.02 1.6 1.02 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.41-.01 2.74 0 .27.18.58.69.48A10.003 10.003 0 0022 12c0-5.52-4.48-10-10-10z"
                                    />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/abhishek-saini-73a951155/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
                    2.761 2.239 5 5 5h14c2.761 0 
                    5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 
                    19h-3v-10h3v10zm-1.5-11.268c-.966 
                    0-1.75-.804-1.75-1.732s.784-1.732 
                    1.75-1.732 1.75.804 
                    1.75 1.732-.784 1.732-1.75 
                    1.732zm13.5 11.268h-3v-5.604c0-3.368-4-3.113-4 
                    0v5.604h-3v-10h3v1.604c1.396-2.586 
                    7-2.777 7 2.476v5.92z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#about" className="hover:text-white">About Me</a></li>
                            <li><a href="#projects" className="hover:text-white">Projects</a></li>
                            <li><a href="#contact" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Email: <a href="mailto:youremail@example.com" className="hover:text-white">abhisheksaini4952@gmail.com</a></li>
                            <li>Location: Alwar, Rajasthan, India</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 text-center text-sm text-gray-500">
                    &copy; {currentYear} Abhishek Saini. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
