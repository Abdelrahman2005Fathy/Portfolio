import React from 'react';

import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from 'react-icons/fa6';
import {
  SiGit,
  SiJest,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const Grid = () => {
  return (
    <section className="flex flex-col gap-12">
      <h1
        id="skills"
        className="relative text-center text-[50px] font-bold tracking-widest"
      >
        My <span className="text-purple ">Skills</span>
      </h1>

      <div className="relative flex flex-wrap justify-center items-center lg:gap-[200px] sm:gap-[300px]">
        <div className="flex flex-col font-semibold tracking-widest items-center gap-5">
          <FaHtml5 size={100} color="#E34F26" />
          <a
            href="/HTML & CSS Certificate.pdf"
            target="_blank "
            className="hover:text-html"
          >
            Html5
          </a>
        </div>
        <div className="flex flex-col font-semibold tracking-widest items-center gap-5">
          <FaCss3Alt size={100} color="#1572B6" />
          <a
            href="/SASS Certificate.pdf"
            target="_blank"
            className="hover:text-css"
          >
            Css3
          </a>
        </div>
        <div className="flex flex-col font-semibold tracking-widest items-center gap-5">
          <FaJs size={100} color="#F7DF1E" className="rounded-[30px]" />
          <a
            href="/Advanced-JS Certificate.pdf"
            target="_blank "
            className="hover:text-js"
          >
            Javascript
          </a>
        </div>
        <div className="flex flex-col font-semibold tracking-widest items-center gap-5">
          <FaReact size={100} color="#61DAFB" />
          <a
            href="/React Certificate.pdf"
            target="_blank "
            className="hover:text-react"
          >
            React
          </a>
        </div>
        <div className="flex flex-col font-semibold tracking-widest items-center gap-5">
          <SiTypescript size={100} color="#007ACC" />
          <a href="#projects" className="hover:text-typescript">
            Typescript
          </a>
        </div>
        <div className="flex flex-col font-semibold tracking-widest items-center gap-5">
          <SiNextdotjs size={100} color="#eee" />
          <a href="#" target="_blank " className="hover:text-nextjs">
            Next js
          </a>
        </div>
        <div className="flex flex-col font-semibold tracking-widest items-center gap-5">
          <SiRedux size={100} color="#764ABC" />
          <a href="#" target="_blank " className="hover:text-redux">
            Redux
          </a>
        </div>
        <div className="flex flex-col font-semibold tracking-widest items-center gap-5">
          <SiSass size={100} color="#CC6699" />
          <a
            href="/HTML & CSS Certificate.pdf "
            target="_blank "
            className="hover:text-sass"
          >
            Sass
          </a>
        </div>
        <div className="flex flex-col font-semibold tracking-widest items-center gap-5">
          <SiTailwindcss size={100} color="#38B2AC" />
          <a href="#" target="_blank " className="hover:text-tailwind">
            Tailwind
          </a>
        </div>
        <div className="flex flex-col font-semibold tracking-widest items-center gap-5">
          <SiJest size={100} color="#C21325" />
          <a href="#" target="_blank " className="hover:text-jest">
            Jest
          </a>
        </div>
        <div className="flex flex-col font-semibold tracking-widest items-center gap-5">
          <SiGit size={100} color="#F05032" />
          <a
            href="/Git-and-GitHub Certificate.pdf"
            target="_blank "
            className="hover:text-git"
          >
            Git
          </a>
        </div>
        <div className="flex flex-col font-semibold tracking-widest items-center gap-5">
          <FaGithub size={100} color="#F05032" />
          <a
            href="/Git-and-GitHub Certificate.pdf"
            target="_blank "
            className="hover:text-git"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Grid;
