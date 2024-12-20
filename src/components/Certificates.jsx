import React, { useEffect } from 'react';
import '../index.css'; // Import custom CSS

const Certificates = () => {
  useEffect(() => {
    const handleScroll = () => {
      const certificatesSection = document.querySelector(".certificates-container");
      const sectionPosition = certificatesSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (sectionPosition < screenPosition) {
        certificatesSection.classList.add("slide-up");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const certificatesData = [
    {
      img: "images/Meta course.png",
      title: "Intro to Front-End",
      description: "Introduction to Front-End Development course offered by META",
      viewLink: "/PDFs/Coursera Certificate.pdf",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/ZWS67S2B9RUL"
    },
    {
      img: "images/Chatbot.png",
      title: "Smart Chatbot",
      description: "Use SharePoint & Power Virtual Agent to Create Smart Chatbot",
      viewLink: "/PDFs/Chatbot- Coursera.pdf",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/JNVJP67NPPAB"
    },
    {
      img: "images/HMC Letter.png",
      title: "HMC Internship Letter",
      description: "HMC Internship completion letter (01 August 2022 - 31 August 2022, 04 Weeks)",
      viewLink: "/PDFs/HMC.pdf"
    }
  ];

  return (
    <section id="certificates" className="container mx-auto w-full min-w-full py-20 text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-black text-white">
      <h2 className="text-3xl font-bold mb-6 dark:text-white">Certificates</h2>
      <p className="mb-6 dark:text-white">Certificates and Internship Letters</p>
      
      <div className="certificates-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {certificatesData.map((certificate, index) => (
          <div
            key={index}
            className="certificate border-2 p-6 rounded-lg shadow-lg dark:shadow-xl hover:shadow-xl hover:scale-105 transition-transform duration-300"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} // Set to a transparent dark background
          >
            <img src={certificate.img} alt={certificate.title} className="certificate-image w-full h-auto rounded-md mb-4 dark:filter dark:brightness-75 dark:contrast-125" />
            <h3 className="text-lg font-semibold mb-2 dark:text-white">{certificate.title}</h3>
            <p className="mb-4 text-sm dark:text-gray-300">{certificate.description}</p>
            <div className="flex justify-center space-x-2">
              <a href={certificate.viewLink} className="btn bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-600 hover:text-white transition duration-300 text-center flex-1 dark:bg-white dark:text-black dark:hover:bg-gray-800 dark:hover:text-white">View</a>
              {certificate.verifyLink && (
                <a href={certificate.verifyLink} className="btn bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-600 hover:text-white transition duration-300 text-center flex-1 dark:bg-white dark:text-black dark:hover:bg-gray-800 dark:hover:text-white">Verify</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
