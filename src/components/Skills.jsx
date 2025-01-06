import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto w-full min-w-full text-center py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-black text-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white dark:text-gray-200">Skills</h2>
      
      <ul className="list-none p-0 flex flex-wrap justify-center gap-6">
        {[
          "C++", "HTML5", "CSS3", "JavaScript", "C++", "Python", "Java", "Bootstrap 5", 
          "JQuery", "MySQL", "Tailwind CSS", "React.js", "PHP", 
          "MS PowerBi", "MS Word", "MS PowerPoint", "MS Excel"
        ].map(skill => (
          <li
            key={skill}
            className="p-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-900 text-gray-100 dark:text-white rounded-lg shadow-md hover:shadow-2xl hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-800 dark:hover:bg-gradient-to-r dark:hover:from-black dark:hover:to-gray-700 transition duration-300 ease-in-out"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
