import { useLocation } from "react-router-dom";
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

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 shadow-[0_2px_10px_rgba(0,0,0,0.1)] lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
    <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
      <a
        className="block w-[12rem] xl:mr-8"
        href="#"
        onClick={(e) => {
          e.preventDefault();  // Prevent the default behavior of the anchor tag
          window.history.pushState({}, '', '/');  // Clear any routes and go to the root URL
          document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });  // Smooth scroll to #hero section
        }}
      >
        <img src={dokuLogo} width={190} height={40} alt="Brainwave" />
      </a>




        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
          {navigation.map((item) => {
              if (item.id === "4") {
                // For the WebAppButton item, replace <a> with the button functionality
                return (
                  <div key={item.id} className="block px-6 py-6 md:py-8">
                    <Button onClick={handleWebAppClick} className="!bg-black hover:!bg-black !text-white font-semibold">
                      Gå til webapp
                    </Button>
                  </div>
                );
              }

              // Render regular navigation links
              return (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              );
            })}
          </div>

          <HamburgerMenu />
        </nav>

        <WebAppButton /> 

        {/* Button for mobile menu toggle */}
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;