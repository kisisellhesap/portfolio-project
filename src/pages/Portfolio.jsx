import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const Portfolio = () => {
  return (
    <div className=" flex flex-col flex-1 gap-10 my-10 page-effect">
      <h3 className="mb-10">
        In this section, I will show you some of the projects I have done. If
        you have any suggestions or thoughts about my projects, you can reach me
        via social media or e-mail.
      </h3>
      <p>
        If you want to see more projects, check out my
        <a
          href="https://github.com/kisisellhesap"
          className="mx-3  p-2 text-[.7rem] rounded-md "
          target="_blank"
        >
          kisisellhesap
        </a>
        and
        <a
          href="https://github.com/flycode00"
          target="_blank"
          className="mx-3 p-2 rounded-md text-[.7rem]"
        >
          flycode00
        </a>
        accounts!
      </p>
      <Splide
        aria-label="My Favorite Images"
        options={{
          fixedWidth: "20rem",
          fixedHeight: "13rem",
          gap: "1rem",
        }}
      >
        <SplideSlide>
          <a href="https://github.com/kisisellhesap/Crud-App" target="_blank">
            <h3>Crud App</h3>
            <img
              src="portfolio/crud.gif"
              className="grayscale contrast-100 rounded-lg h-[100%]"
            />
          </a>
        </SplideSlide>
        <SplideSlide>
          <a
            href="https://github.com/kisisellhesap/Github-Finder"
            target="_blank"
          >
            <h3>Github Finder</h3>

            <img
              src="portfolio/finder.gif"
              className="grayscale contrast-100 rounded-lg h-[100%]"
            />
          </a>
        </SplideSlide>
        <SplideSlide>
          <a
            href="https://github.com/kisisellhesap/NumberGuess-Game"
            target="_blank"
          >
            <h3>Guess Game</h3>

            <img
              src="portfolio/number.gif"
              className="grayscale contrast-100 rounded-lg h-[100%]"
            />
          </a>
        </SplideSlide>
        <SplideSlide>
          <a
            href="https://github.com/kisisellhesap/shopZon--dev"
            target="_blank"
          >
            <h3>Shopzon</h3>
            <img
              src="portfolio/shopzon.gif"
              className="grayscale contrast-100 rounded-lg h-[100%]"
            />
          </a>
        </SplideSlide>
        <SplideSlide>
          <a
            href="https://github.com/kisisellhesap/toolkit-thunk-translate"
            target="_blank"
          >
            <h3>Translate Appe</h3>
            <img
              src="portfolio/translate.gif"
              className="grayscale contrast-100 rounded-lg h-[100%]"
            />
          </a>
        </SplideSlide>
        <SplideSlide>
          <a
            href="https://github.com/kisisellhesap/youtube-clone"
            target="_blank"
          >
            <h3>Youtube Clone</h3>
            <img
              src="portfolio/youtube.gif"
              className="grayscale contrast-100 rounded-lg h-[100%]"
            />
          </a>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Portfolio;
