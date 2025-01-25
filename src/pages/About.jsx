import React from "react";

const About = () => {
  return (
    <div className=" flex flex-col items-center flex-1 my-10 page-effect">
      <h1 className="text-4xl text-center mb-5">Welcome to my playground</h1>
      <div className="flex max-md:flex-col justify-center items-center w-full ">
        <div className="game-park">
          <img
            src="seesaw/woods.png"
            className="seesaw-animation"
            alt="woods"
          />
          <img src="brain.png" className="brain-animation" alt="brain" />
          <img src="box.png" className="box-animation" alt="box" />
        </div>

        <img src="old-man.png" />
      </div>

      <p className="max-w-[80%]">
        "Someone who works hard to make his dreams come true . Seeking a fresh
        start, I’ve embarked on a journey to find a career that aligns with my
        happiness and aspirations. Currently, I am learning coding to become a
        skilled Front-End Developer, focusing on HTML, CSS, JavaScript and React
        . Along the way, I am building projects to strengthen my skills. You can
        check out my work on GitHub and Vercel, and feel free to contact me if
        you'd like to discuss my projects or connect."
      </p>
    </div>
  );
};

export default About;
