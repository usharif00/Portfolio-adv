import React from 'react';

const Education = () => {
  return (
    <section
      id="education"
      className="container mx-auto w-full min-w-full  py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-black text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white dark:text-gray-200">
        Education
      </h2>
      <div className="flex flex-col md:flex-row md:justify-around gap-6">
        <div className="md:w-1/3 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-black p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h3 className="text-2xl font-bold mb-3 text-white dark:text-gray-300">Matric:</h3>
          <p className="text-sm sm:text-base text-gray-300 dark:text-gray-400">Siddeeq Public School, 6th Road, Satellite town, Rawalpindi</p>
          <p className="text-sm sm:text-base text-gray-300 dark:text-gray-400">2007 – 2017</p>
        </div>
        <div className="md:w-1/3 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-black p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h3 className="text-2xl font-bold mb-3 text-white dark:text-gray-300">FSC:</h3>
          <p className="text-sm sm:text-base text-gray-300 dark:text-gray-400">Punjab College of Information & Technology (PCIT), Commercial market, Satellite town, Rawalpindi</p>
          <p className="text-sm sm:text-base text-gray-300 dark:text-gray-400">2017 – 2019</p>
        </div>
        <div className="md:w-1/3 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-black p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h3 className="text-2xl font-bold mb-3 text-white dark:text-gray-300">BSSE:</h3>
          <p className="text-sm sm:text-base text-gray-300 dark:text-gray-400">Air University, PAF Complex E-9, Islamabad</p>
          <p className="text-sm sm:text-base text-gray-300 dark:text-gray-400">Sept 2019 – June 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
