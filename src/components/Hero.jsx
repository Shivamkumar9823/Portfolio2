import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload } from "react-icons/fa";  // ✅ Correct
import resume from "../Resume.pdf"


const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Hello, I'm <span className="highlight">Shivam kumar</span></h1>
          <div className="hero-typed">
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                1000,
                'Backend Developer',
                1000,
                'React Specialist',
                1000,
                'Software Developer',
                1000,
                'Web Designer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p>
            Building beautiful, responsive websites with modern technologies.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href={resume} download={resume} className="btn btn-secondary"> <FaDownload />  Resume</a>
            <a href="#projects" className="btn btn-secondary">My Work</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;