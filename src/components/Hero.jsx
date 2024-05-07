import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import deved from "../../public/dev-ed-wave.png";
const Hero = () => {
  return (
    <section className=" relative min-h-screen">
      <nav className="flex justify-between py-10 mb-12">
        <h1 className="text-xl font-burtons">Developedbyed</h1>
        <ul className="flex  items-center gap-8">
          <li>
            <BsFillMoonStarsFill className="cursor-pointer text-2xl"></BsFillMoonStarsFill>
          </li>
          <li>
            <a
              href="#"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 to px-4 py-2 text-white rounded-md "
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">
          Ashish Dhyani
        </h2>
        <h3 className="text-2xl py-2">Frontend Developer</h3>
        <p className="text-md py-5 leading-6 text-gray-800">
          Web developer with 2 years of experience in building user friendly
          responsive web designs. Join me down below and let's get cracking!
        </p>
        <ul className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <li>
            <a href="http://">
              <AiFillGithub></AiFillGithub>
            </a>
          </li>
          <li>
            <a href="http://">
              <AiFillLinkedin></AiFillLinkedin>
            </a>
          </li>
          <li>
            <a href="http://">
              <AiFillTwitterCircle></AiFillTwitterCircle>
            </a>
          </li>
        </ul>
      </div>
      <div className=""></div>
    </section>
  );
};

export default Hero;
