import React from 'react';

const Experience = () => {
  return (
    <section
      id="experience"
      className="container mx-auto w-full min-w-full  py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-black text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white dark:text-gray-200">
        Work Experience
      </h2>
      <div className="flex flex-col md:flex-row md:justify-around gap-6">
        <div className="md:w-1/3 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-black p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h3 className="text-2xl font-bold mb-3 text-white dark:text-gray-300">Heavy Mechanical Complex (HMC), Taxila</h3>
          <p className="text-sm sm:text-base text-gray-300 dark:text-gray-400">
            Data Visualization using MS PowerBi & MS Excel <br /> Python, HTML, CSS
          </p>
          <p className="text-sm sm:text-base text-gray-300 dark:text-gray-400">(01 August 2022 – 31 August 2022)</p>
        </div>
        <div className="md:w-1/3 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-black p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h3 className="text-2xl font-bold mb-3 text-white dark:text-gray-300">Codiro Technologies, Taxila</h3>
          <p className="text-sm sm:text-base text-gray-300 dark:text-gray-400">
            Frontend: JavaScript, React.js, jQuery, Bootstrap, Tailwind CSS <br/> 
            Backend: PHP, Database: MySQL 
            </p>
          <p className="text-sm sm:text-base text-gray-300 dark:text-gray-400">(25 September 2024 - Present)</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
