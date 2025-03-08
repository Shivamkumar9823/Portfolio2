import React from 'react';
import image from "../assets/WhatsApp Image 2025-03-08 at 15.55.20_aed677c1.jpg"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={image} alt="Profile" />
          </div>
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>
    Hello! I'm <b>Shivam Kumar</b>, a passionate <b>Software Developer</b> specializing in 
    <b> full-stack web development</b>. Currently pursuing my 
    <b> B.Tech in CSE</b> at <b>NIT Srinagar</b>, I have hands-on experience in building 
    <b> scalable applications</b> and <b>AI-driven solutions</b>.
</p>

<p>
    Proficient in <b>C++</b>, <b>JavaScript</b>, <b>Python</b>, and <b>MERN stack</b>, I've 
    developed projects like a <b>food delivery app</b> and a <b>real-time chat app</b>. As an 
    <b> SDE Intern at Desho Retails</b>, I built a <b>multi-vendor e-commerce platform</b>, integrating 
    <b> payment gateways</b> and <b>Shiprocket</b>. At <b>IIT BHU</b>, I worked on <b>machine learning models</b> 
    for <b>ECG signal processing</b>, improving <b>signal clarity</b> and <b>accuracy</b>.
</p>
   
            <div className="about-details">
              <div className="detail-item">
                <strong>Name:</strong> Shivam kumar
              </div>
              <div className="detail-item">
                <strong>Email:</strong> shivamkumarsingh.sk.2020@gmail.com
              </div>
              <div className="detail-item">
                <strong>Location:</strong> Srinagar, India.
              </div>
              <div className="detail-item">
                <strong>Available for:</strong> Internship, Full-time positions
              </div>
            </div>
            
            <div className="about-social">
              <a href="https://github.com/Shivamkumar9823" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/shivam-kumar-3a9b1a261/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a> */}
            </div>
            
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;