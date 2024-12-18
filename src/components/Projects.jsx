import React from 'react';
import '../index.css'; // Import custom CSS

const Projects = () => {
  const projectData = [
    {
      img: "/images/FB-Login Clone.png",
      title: "FB - Login Clone",
      description: "Facebook login page clone using HTML, CSS",
      codeLink: "https://github.com/usharif00/FB-Login-Page-Clone-",
      liveLink: "#",
      notDeployed: true
    },
    {
      img: "/images/Netflix-Login Clone.png",
      title: "Netflix Login Clone",
      description: "Netflix login page clone using HTML, CSS",
      codeLink: "https://github.com/usharif00/Netflix-Login-Page-Clone-",
      liveLink: "#",
      notDeployed: true
    },
    {
      img: "/images/Notes Taking App.png",
      title: "Notes taking App",
      description: "Notes taking web app using HTML, CSS, JavaScript",
      codeLink: "https://github.com/usharif00/Notes-Taking-Web-App",
      liveLink: "https://usharif00.github.io/Notes-Taking-Web-App/"
    },
    {
      img: "/images/Portfolio (Old Version).png",
      title: "Old Portfolio",
      description: "Previous portfolio (self practice)",
      codeLink: "https://github.com/usharif00/Portfolio-Old-",
      liveLink: "#",
      notDeployed: true
    },
    {
      img: "/images/Counter.png",
      title: "Counter App",
      description: "Simple counter app with 'Decrement', 'Reset', 'Increment' buttons using HTML, CSS, JavaScript",
      codeLink: "https://github.com/usharif00/Counter-App",
      liveLink: "https://usharif00.github.io/Counter-App/"
    },
    {
      img: "/images/Student Profile - Generic.png",
      title: "Student Profile - Generic",
      description: "Generic student profile (self practice) using HTML, CSS, JavaScript",
      codeLink: "https://github.com/usharif00/Student-Profile-Generic-",
      liveLink: "https://usharif00.github.io/Student-Profile-Generic-/"
    },
    {
      img: "/images/Bottom NavBar.png",
      title: "Bottom Capsule NavBar",
      description: "Only Navbar at bottom in capsule format (self practice)",
      codeLink: "https://github.com/usharif00/Bottom-Capsule-NavBar",
      liveLink: "#",
      notDeployed: true
    },
    {
      img: "/images/Navbars-Sidebars, Tabs-Page.png",
      title: "NavBar + SideBars + Tabs Page",
      description: "One main Navbar with 2 SideBars (Notifications & Settings) along with tabs page for each tab. HTML, CSS and Jquery is used here (self practice)",
      codeLink: "https://github.com/usharif00/NavBar-SideBars-Tabs-Page",
      liveLink: "https://usharif00.github.io/NavBar-SideBars-Tabs-Page/"
    },
    {
      img: "/images/Simple Nabar and Sidebars.png",
      title: "NavBar and SideBars",
      description: "Navbar with 2 Sidebars using HTML, CSS, JavaScript (self practice)",
      codeLink: "https://github.com/usharif00/NavBar-and-SideBars",
      liveLink: "https://usharif00.github.io/NavBar-and-SideBars/"
    },
    {
      img: "/images/UI (Bootstrap).png",
      title: "Web User Interface (Clone)",
      description: "User Interface purely on Bootstrap with multiple formatting, features and styling (self practice)",
      codeLink: "https://github.com/usharif00/Web-User-Interface-Clone-",
      liveLink: "#",
      notDeployed: true
    }
  ];

  return (
    <section id="projects" className="container mx-auto w-full min-w-full py-20 text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-black text-white">
      <h2 className="text-3xl font-bold mb-6 dark:text-white">Projects</h2>
      <p className="mb-6 dark:text-white">(Clone Projects are not available for live demo)</p>

      <div className="projects-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="project border-2 p-6 rounded-lg shadow-lg dark:shadow-xl hover:shadow-xl hover:scale-105 transition-transform duration-300"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} // Set to a transparent dark background
          >
            <img src={project.img} alt={project.title} className="project-image w-full h-auto rounded-md mb-4 dark:filter dark:brightness-75 dark:contrast-125" />
            <h3 className="text-lg font-semibold mb-2 dark:text-white">{project.title}</h3>
            <p className="mb-4 text-sm dark:text-gray-300">{project.description}</p>
            <div className="flex justify-center space-x-2">
              <a href={project.codeLink} className="btn bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-600 hover:text-white transition duration-300 text-center flex-1 dark:bg-white dark:text-black dark:hover:bg-gray-800 dark:hover:text-white">View Code</a>
              {project.notDeployed ? (
                <button className="btn bg-gray-600 text-white py-2 px-4 rounded-lg cursor-not-allowed text-center flex-1 dark:bg-gray-800 dark:text-gray-400">Not Deployed</button>
              ) : (
                <a href={project.liveLink} className="btn bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-600 hover:text-white transition duration-300 text-center flex-1 dark:bg-white dark:text-black dark:hover:bg-gray-800 dark:hover:text-white">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
