import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto w-full min-w-full text-center py-12 px-6 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-black text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white leading-tight tracking-wide">
          About Me
        </h2>
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-black p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <p className="text-lg sm:text-xl mb-4 text-gray-300 dark:text-gray-400">
            Hi, I'm <span className="font-extrabold text-xl sm:text-2xl text-gray-200 dark:text-gray-200">Muhammad Usman Sharif</span>, a front-end developer with a passion for learning new technologies.
          </p>
          <p className="text-base sm:text-lg text-gray-300 dark:text-gray-500">
            I am a Front-End Developer (beginner). I enjoy learning new technologies and keeping up to date with the latest trends in software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
