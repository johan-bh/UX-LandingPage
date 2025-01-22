import { useLocation, useNavigate, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect } from "react";
import Section from "./Section";
import REMedyLogo from "../assets/REMedy_navbar_logo.svg";

const Header = () => {
  const pathname = useLocation();
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };


  const handleNavClick = async (e, url) => {
    e.preventDefault();
    
    // If it's the home link, just scroll to top
    if (url === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      handleClick(); // Close mobile menu if open
      return;
    }
    
    // For other route-based links (FAQs, About, Signup), navigate to the page
    if (url === '/faqs' || url === '/about' || url === '/signup' || url === '/how-it-works') {
      navigate(url);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      handleClick(); // Close mobile menu if open
      return;
    }
    
    // Rest of the existing scroll logic for other sections...
    if (window.location.pathname !== '/') {
      await navigate('/');
      setTimeout(() => {
        const sectionId = url.replace('#', '');
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const sectionId = url.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    
    handleClick(); // Close mobile menu if open
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 shadow-[0_2px_10px_rgba(0,0,0,0.1)] ${
        openNavigation 
          ? "bg-black" 
          : "bg-gray-50 dark:bg-gray-800"
      }`}
    >
      <div className="flex items-center px-8 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a 
          href="/"
          onClick={handleLogoClick}
          className="block w-[12rem] xl:mr-8"
        >
          <img src={REMedyLogo} alt="REMedy" className="dark:invert" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-0 left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent dark:text-white ${
            openNavigation ? 'bg-white dark:bg-gray-900 backdrop-blur-sm' : ''
          }`}
        >
          {/* Add Dark Mode Toggle for Mobile */}
          {openNavigation && (
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="lg:hidden absolute top-[-2rem] left-8 transition-colors duration-200 ease-in-out z-50 bg-transparent"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className={`text-3xl hover:text-blue-400 ${darkMode ? 'text-white' : 'text-black'}`}>
                {darkMode ? '☀️' : '🌙'}
              </span>
            </button>
          )}

          <div className="relative z-2 flex flex-col items-center justify-start w-full pt-20 lg:flex-row lg:pt-0">
            {navigation.map((item) => {
              if (item.id === "4") {
                return null;
              }
              return (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={(e) => handleNavClick(e, item.url)}
                  className={`block relative font-code text-2xl uppercase ${
                    openNavigation 
                      ? darkMode ? "text-white" : "text-black"
                      : item.highlight 
                        ? "text-[#1E9AFC] font-bold" 
                        : "text-black/50 dark:text-white/50"
                  } ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-4 md:py-6 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "text-black dark:text-white"
                      : ""
                  } lg:leading-5 xl:px-12 hover:no-underline hover:opacity-70 transition-opacity`}
                >
                  {item.title}
                </a>
              );
            })}
          </div>
        </nav>

        {/* Button for mobile menu toggle */}
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>

        {/* Dark Mode Toggle Button */}
        <div className="hidden lg:block">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md transition-colors duration-200 ease-in-out"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="text-4xl text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300">
              {darkMode ? '☀️' : '🌙'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;