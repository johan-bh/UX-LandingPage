import { useLocation, useNavigate, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { dokuLogo } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import WebAppButton from './WebAppButton';
import Section from "./Section";

const Header = () => {
  const pathname = useLocation();
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(false);

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

  const handleWebAppClick = () => {
    window.location.href = "https://app.dokudok.dk";
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

  const handleLogoClick = async (e) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      await navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleClick(); // Close mobile menu if open
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 shadow-[0_2px_10px_rgba(0,0,0,0.1)] ${
        openNavigation ? "bg-black" : "bg-white lg:bg-transparent"
      }`}
    >
      <div className="flex items-center px-8 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a 
          href="/"
          onClick={handleLogoClick}
          className="block w-[8.5rem] xl:mr-8"
        >
          <img src={dokuLogo} width={140} height={40} alt="DokuDok" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-0 left-0 right-0 bottom-0 bg-black lg:static lg:flex lg:mx-auto lg:bg-transparent`}
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
                    openNavigation ? "text-white" : item.highlight ? "text-[#1E9AFC] font-bold" : "text-black/50"
                  } ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-4 md:py-6 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "text-black"
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

        {/* WebApp Button - now outside navigation */}
        <div className="hidden lg:block">
          <Button onClick={handleWebAppClick} className="bg-black hover:bg-black text-white font-semibold">
            Gå til webapp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;