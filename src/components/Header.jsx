import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";
import Logo from "./Logo";

const Header = ({ isDark, setIsDark }) => {
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="flex py-5 gap-5 max-md:flex-col max-md:items-center relative">
      <div id="logo">
        <Link to="/">
          <Logo isDark={isDark} />
        </Link>
      </div>
      <nav className="ml-auto max-md:ml-0 flex  items-center gap-10 font-semibold text-lg justify-center">
        <NavLink to="/">About</NavLink>
        <NavLink to="portfolio">Portfolio</NavLink>
        <button
          onClick={toggleTheme}
          className="text-3xl ml-10 max-md:absolute right-5 top-5"
        >
          {isDark ? <MdNightlight /> : <FaSun />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
