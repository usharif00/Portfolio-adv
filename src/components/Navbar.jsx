import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { RxMoon } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [hoveredLabel, setHoveredLabel] = useState('');

  const navItems = [
    { href: "https://www.linkedin.com/in/muhammad-usman-sharif-bbb097209/", icon: <FaLinkedin className="w-5 h-5"/>, label: "LinkedIn" },
    { href: "https://github.com/usharif00", icon: <IoLogoGithub className="w-5 h-5"/>, label: "Github" },
    { href: "https://www.instagram.com/ushareef.00", icon: <FaInstagram className="w-5 h-5"/>, label: "Instagram" },
    { href: "https://wa.me/923105879391", icon: <FaWhatsapp className="w-5 h-5"/>, label: "WhatsApp" },
    { href: "mailto:usmansharif972@gmail.com", icon: <FaEnvelope className="w-5 h-5"/>, label: "Email" }
  ];

  return (
    <div className="fixed z-50 bottom-4 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-full dark:bg-gray-700 dark:border-gray-600 backdrop-blur-lg bg-opacity-30 dark:bg-opacity-30 transition-all duration-300 hover:scale-105 max-w-fit px-4 py-3 w-auto sm:w-[80%] md:w-[60%] lg:w-[50%]">
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center text-white dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-500 cursor-pointer"
            onMouseEnter={() => setHoveredLabel(item.label)}
            onMouseLeave={() => setHoveredLabel('')}
          >
            <a href={item.href} className="flex flex-col items-center justify-center">
              {/* Icon size */}
              <div className="w-6 h-6 sm:w-5 sm:h-5">{item.icon}</div>
              {hoveredLabel === item.label && (
                <span
                  className={`absolute -top-6 text-xs px-2 py-1 rounded-md 
                    ${theme === 'light' ? 'text-white' : 'bg-white'}`}
                >
                  {item.label}
                </span>
              )}
            </a>
          </div>
        ))}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 bg-transparent rounded-full text-white dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-500 sm:w-8 sm:h-8"
        >
          {theme === 'light' ? <IoSunnyOutline className="w-6 h-6" /> : <RxMoon className="w-5 h-5" />}
          <span className="sr-only">Toggle Theme</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
