import React from 'react';
import '../index.css'; // Import custom CSS

// Import images directly
import FBLoginClone from '../images/FB-Login-Clone.png';
import NetflixLoginClone from '../images/Netflix-Login Clone.png';
import NotesTakingApp from '../images/Notes Taking App.png';
import OldPortfolio from '../images/Portfolio (Old Version).png';
import CounterApp from '../images/Counter.png';
import StudentProfile from '../images/Student Profile - Generic.png';
import BottomNavBar from '../images/Bottom-NavBar.png';
import NavSideTabs from '../images/Navbars-Sidebars, Tabs-Page.png';
import SimpleNavSide from '../images/Simple Nabar and Sidebars.png';
import WebUI from '../images/UI (Bootstrap).png';
import BMIImage from '../images/BMI.png';
import LoginPHPImage from '../images/Login (PHP).png';
import SimpleSchoolDBImage from '../images/Error image.png';
import SchoolMgmtBackendImage from '../images/Error image.png';
import CodiroWebCloneImage from '../images/Error image.png';
import ExpenseTrackerImage from '../images/Expense.png';
import WeatherAppImage from '../images/weather-app.png';
import StudentMgmtSystemImage from '../images/Error image.png';

const Projects = () => {
  const projectData = [
    {
      img: FBLoginClone,
      title: "FB - Login Clone",
      description: "Facebook login page clone using HTML, CSS",
      codeLink: "https://github.com/usharif00/FB-Login-Page-Clone-",
      liveLink: "#",
      notDeployed: true
    },
    {
      img: NetflixLoginClone,
      title: "Netflix Login Clone",
      description: "Netflix login page clone using HTML, CSS",
      codeLink: "https://github.com/usharif00/Netflix-Login-Page-Clone-",
      liveLink: "#",
      notDeployed: true
    },
    {
      img: NotesTakingApp,
      title: "Notes taking App",
      description: "Notes taking web app using HTML, CSS, JavaScript",
      codeLink: "https://github.com/usharif00/Notes-Taking-Web-App",
      liveLink: "https://usharif00.github.io/Notes-Taking-Web-App/"
    },
    {
      img: OldPortfolio,
      title: "Old Portfolio",
      description: "Previous portfolio (self practice)",
      codeLink: "https://github.com/usharif00/Portfolio-Old-",
      liveLink: "#",
      notDeployed: true
    },
    {
      img: CounterApp,
      title: "Counter App",
      description: "Simple counter app with 'Decrement', 'Reset', 'Increment' buttons using HTML, CSS, JavaScript",
      codeLink: "https://github.com/usharif00/Counter-App",
      liveLink: "https://usharif00.github.io/Counter-App/"
    },
    {
      img: StudentProfile,
      title: "Student Profile - Generic",
      description: "Generic student profile (self practice) using HTML, CSS, JavaScript",
      codeLink: "https://github.com/usharif00/Student-Profile-Generic-",
      liveLink: "https://usharif00.github.io/Student-Profile-Generic-/"
    },
    {
      img: BottomNavBar,
      title: "Bottom Capsule NavBar",
      description: "Only Navbar at bottom in capsule format (self practice)",
      codeLink: "https://github.com/usharif00/Bottom-Capsule-NavBar",
      liveLink: "#",
      notDeployed: true
    },
    {
      img: NavSideTabs,
      title: "NavBar + SideBars + Tabs Page",
      description: "One main Navbar with 2 SideBars (Notifications & Settings) along with tabs page for each tab. HTML, CSS and Jquery is used here (self practice)",
      codeLink: "https://github.com/usharif00/NavBar-SideBars-Tabs-Page",
      liveLink: "https://usharif00.github.io/NavBar-SideBars-Tabs-Page/"
    },
    {
      img: SimpleNavSide,
      title: "NavBar and SideBars",
      description: "Navbar with 2 Sidebars using HTML, CSS, JavaScript (self practice)",
      codeLink: "https://github.com/usharif00/NavBar-and-SideBars",
      liveLink: "https://usharif00.github.io/NavBar-and-SideBars/"
    },
    {
      img: WebUI,
      title: "Web User Interface (Clone)",
      description: "User Interface purely on Bootstrap with multiple formatting, features and styling (self practice)",
      codeLink: "https://github.com/usharif00/Web-User-Interface-Clone-",
      liveLink: "#",
      notDeployed: true
    },
    {
      img: BMIImage,
      title: "BMI Calculator",
      description: "BMI Calculator using React.js",
      codeLink: "https://github.com/usharif00/BMI-Calculator-.git",
      liveLink: "#",
      notDeployed: true,
    },
    {
      img: LoginPHPImage,
      title: "Login/Signup PHP",
      description: "Login and Signup forms using PHP",
      codeLink: "https://github.com/usharif00/Login-Form-PHP.git",
      liveLink: "#",
      notDeployed: true,
    },
    {
      img: SimpleSchoolDBImage,
      title: "Simple School DB",
      description: "Simple School DB using PHP for practice only",
      codeLink: "https://github.com/usharif00/School-DB-PHP.git",
      liveLink: "#",
      notDeployed: true,
    },
    {
      img: SchoolMgmtBackendImage,
      title: "School Management System (Backend)",
      description: "Used PHP for backend of School Management System with simple layout",
      codeLink: "https://github.com/usharif00/School-Management-System-PHP.git",
      liveLink: "#",
      notDeployed: true,
    },
    {
      img: CodiroWebCloneImage,
      title: "Codiro Web Clone",
      description: "Clone the website of Codiro Tech as practice which was made by my supervisor",
      codeLink: "https://github.com/usharif00/Codiro-Web-Clone.git",
      liveLink: "#",
      notDeployed: true,
    },
    {
      img: ExpenseTrackerImage,
      title: "Expense Tracker Web App",
      description: "Simple Web app for Expense Tracker using React.js",
      codeLink: "https://github.com/usharif00/Expense-Tracker.git",
      liveLink: "#",
      notDeployed: true,
    },
    {
      img: WeatherAppImage,
      title: "React Weather App",
      description: "Weather App using React API and Tailwind CSS",
      codeLink: "https://github.com/usharif00/Weather-App.git",
      liveLink: "#",
      notDeployed: true,
    },
    {
      img: StudentMgmtSystemImage,
      title: "Student Management System",
      description: "Only UI for Student Management System with 3 roles (Admin, Teacher, Student) with all fully functional pages in each role",
      codeLink: "https://github.com/usharif00/Student-Management-System-.git",
      liveLink: "#",
      notDeployed: true,
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
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
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
