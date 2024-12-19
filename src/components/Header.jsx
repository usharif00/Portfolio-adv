import React from 'react';

const Header = () => {
  return (
    <div
      id="header"
      className="container mx-auto w-full min-w-full sheading-section h-[50vh] flex flex-col justify-center items-center px-6 text-center relative bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-black text-white"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white dark:text-gray-200 leading-tight tracking-wide">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg sm:text-xl mb-6 text-gray-300 opacity-90 dark:text-gray-400">
        I'm a Front-End Developer creating beautiful and functional web pages.
      </p>
      <a
        href="public/PDFs/Usman Sharif - CV.pdf"
        className="download-btn bg-transparent border-2 border-white text-white py-2 px-6 rounded-full font-medium tracking-wide transition-colors duration-300 ease-in-out hover:bg-white hover:text-black dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        Download CV
      </a>
    </div>
    
  );
};

export default Header;
