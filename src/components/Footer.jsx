import React from "react";
import { MdEmail } from "react-icons/md";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto flex gap-3 justify-between py-3">
      <p className="text-[.7rem]">
        Copyright © 2025 I All rights reserved II Design by kisisellhesap
      </p>
      <div className="flex text-2xl gap-5">
        <a href="mailto:ahmetcannkaragoz@gmail.com">
          <MdEmail />
        </a>
        <a href="https://github.com/kisisellhesap">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ahmetcankaragoz/">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
