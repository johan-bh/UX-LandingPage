import React from "react";
import Section from "./Section";
import skylabLogo from "../assets/socials/DTU-skylab-logo.png";
import sundhedsstyrelssenLogo from "../assets/socials/sundhedsstyrelsen.png";
import camAauLogo from "../assets/socials/CAM_AAU.svg";

const Footer = () => {
  return (
    <Section className="!px-0 !py-10 sm:!pb-1 dark:bg-gray-900">
      <div className="w-full px-4 sm:px-8 flex flex-col-reverse sm:flex-row items-center">
        {/* Left: Copyright */}
        <div className="flex flex-row flex-wrap items-center sm:mr-auto text-xs sm:text-sm mt-8 sm:mt-0">
          <p className="caption text-black dark:text-white">
            © {new Date().getFullYear()} REMedy. All rights reserved
          </p>
        </div>

        {/* Right: Logos */}
        <div className="footer-container">
          <a
            href="https://www.skylab.dtu.dk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity pl-8"
          >
            <img
              src={skylabLogo}
              alt="DTU Skylab"
              className="dark:invert"
              style={{ height: "60px", objectFit: "contain" }}
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
              className="dark:invert"
              style={{ height: "80px", objectFit: "contain" }}
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
              className="dark:invert"
              style={{ height: "100px", objectFit: "contain" }}
            />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Footer;