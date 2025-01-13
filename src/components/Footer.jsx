import React from "react";
import Section from "./Section";
import skylabLogo from "../assets/socials/DTU-skylab-logo.png";
import mikrolegatLogo from "../assets/socials/mikrolegat_logo_3.png";
import camAauLogo from "../assets/socials/CAM_AAU.svg";

const Footer = () => {
  return (
    <Section className="!px-0 !py-10 sm:!pb-1">
      <div className="w-full px-4 sm:px-8 flex flex-col-reverse sm:flex-row justify-between items-center">
        {/* Left: Copyright and CVR */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm mt-8 sm:mt-0">
          <p className="caption text-black">
            © {new Date().getFullYear()} DokuDok. All rights reserved
          </p>
          <p className="caption text-black">
            CVR: 45219380
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
              style={{ height: "60px", objectFit: "contain" }}
            />
          </a>
          <a
            href="https://mikrolegat.ffefonden.dk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src={mikrolegatLogo}
              alt="Mikrolegat"
              style={{ height: "60px", objectFit: "contain" }}
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
              style={{ height: "100px", objectFit: "contain" }}
            />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
