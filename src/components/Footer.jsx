import React from "react";
import Section from "./Section";
import skylabLogo from "../assets/socials/DTU-skylab-logo.png";
import sundhedsstyrelssenLogo from "../assets/socials/sundhedsstyrelsen.png";
import camAauLogo from "../assets/socials/CAM_AAU.svg";

const Footer = () => {
  return (
    <Section className="!px-0 !py-2 bg-gray-50 dark:bg-gray-800/95">
      <div className="w-full px-4 sm:px-8 flex flex-col-reverse sm:flex-row items-center">
        {/* Left: Copyright */}
        <div className="flex flex-row flex-wrap items-center justify-center w-full sm:w-auto sm:mr-auto text-xs sm:text-sm mt-2 sm:mt-0">
          <p className="caption text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} REMedy. All rights reserved
          </p>
        </div>

        {/* Right: Logos and Trustpilot */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-3">
          {/* Trustpilot Score */}
          <div className="flex flex-col items-end">
            <span className="font-semibold text-[#00B67A] text-sm">4.8/5</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">on Trustpilot</span>
          </div>

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