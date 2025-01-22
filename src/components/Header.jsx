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
    
    // If it's a route-based link (FAQs, About, Signup), navigate to the page and scroll to top
    if (url === '/faqs' || url === '/about' || url === '/signup' || url === '/how-it-works') {
      navigate(url);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      handleClick(); // Close mobile menu if open
      return;
    }
    
    // For scroll links, first ensure we're on home page
    if (window.location.pathname !== '/') {
      await navigate('/');
      // Small delay to ensure DOM is updated
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
      // Already on home page, just scroll
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
    window.location.href = '/';  // Simple redirect to root URL
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 shadow-[0_2px_10px_rgba(0,0,0,0.1)] ${
        openNavigation 
          ? "bg-black" 
          : "bg-white dark:bg-gray-900 lg:bg-transparent dark:text-white"
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
          } fixed top-0 left-0 right-0 bottom-0 bg-black lg:static lg:flex lg:mx-auto lg:bg-transparent dark:text-white`}
        >
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
                      ? "text-white" 
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
          <Button 
            onClick={() => setDarkMode(!darkMode)}
            className="bg-black dark:bg-white hover:bg-black dark:hover:bg-white text-white dark:text-black font-semibold"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;