import React from "react";

const Logo = ({ isDark }) => {
  return (
    <div>
      <div className={isDark ? "logo-dark" : "logo"}>
        <span className="invisible">.</span>
      </div>
      <img
        src="/z.png"
        className={isDark ? "block sleep-animation" : "hidden"}
        alt="zzz"
      />
    </div>
  );
};

export default Logo;
