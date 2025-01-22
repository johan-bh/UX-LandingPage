import React from "react";
import Section from "./Section";
import skylabLogo from "../assets/socials/DTU-skylab-logo.png";
import sundhedsstyrelssenLogo from "../assets/socials/sundhedsstyrelsen.png";
import camAauLogo from "../assets/socials/CAM_AAU.svg";

const Footer = () => {
  return (
    <Section className="!px-0 !py-6 sm:!py-4 bg-gray-50 dark:bg-gray-800/95">
      <div className="w-full px-4 sm:px-8 flex flex-col-reverse sm:flex-row items-center">
        {/* Left: Copyright */}
        <div className="flex flex-row flex-wrap items-center justify-center w-full sm:w-auto sm:mr-auto text-xs sm:text-sm mt-6 sm:mt-0">
          <p className="caption text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} REMedy. All rights reserved
          </p>
        </div>

        {/* Right: Logos */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-6 sm:gap-8">
          <a
            href="https://www.skylab.dtu.dk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src={skylabLogo}
              alt="DTU Skylab"
              className="h-[75px] sm:h-[40px] w-auto object-contain dark:invert"
            />
          </a>
          <a
            href="https://www.almenmedicin.aau.dk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src={camAauLogo}
              alt="CAM AAU"
              className="h-[70px] sm:h-[60px] w-auto object-contain dark:invert"
            />
          </a>
          <a
            href="https://www.sst.dk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src={sundhedsstyrelssenLogo}
              alt="Sundhedsstyrelsen"
              className="h-[97px] sm:h-[61px] w-auto object-contain dark:invert"
            />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Footer;