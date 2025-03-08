import React, { useState } from 'react';
import chatapp from "../assets/chatApp.png"
import foodDelivery from "../assets/foodDel.png"
import prev from "../assets/prev.png"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Real Time Chat App",
      category: "web",
      image: chatapp,
      description: "Developed a real-time chat application with user authentication and secure messaging, integrating Socket.io for instant messaging and group chats. Built with the MERN stack, it ensures seamless communication and efficient message handling.",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      demoLink: "https://chatapp-frontend-xg13.onrender.com/",
      codeLink: "https://github.com/Shivamkumar9823/ChatApp"
    },
    {
      id: 2,
      title: "Food Delivery App",
      category: "web",
      image: foodDelivery,
      description: "Developed a full-stack food delivery web app with user authentication, real-time order tracking, and secure payments. Built using the MERN stack, it features a responsive UI, RESTful APIs for order management, and optimized database queries for scalability.",
      technologies: ["React","Node.js","Express","MongoDB", "Context API", "JWT"],
      demoLink: "https://food-delivery-frontend-aq0g.onrender.com/",
      codeLink: "https://github.com/Shivamkumar9823/Food_delivery"
    },
    {
      id: 3,
      title: "Prev Year Papers",
      category: "ui",
      image: prev,
      description: "Developed a previous year question paper app for college students, providing branch-wise access to past papers. The platform includes user authentication, paper uploads, and a structured repository for easy navigation.",
      technologies: ["React", "API Integration", "cloudinary", "CSS3"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/Shivamkumar9823/PrevPaper"
    }
    // {
    //   id: 4,
    //   title: "Portfolio Website",
    //   category: "web",
    //   image: "/api/placeholder/600/400",
    //   description: "A personal portfolio website showcasing skills, projects, and professional experience. Features responsive design and interactive elements to enhance user experience.",
    //   technologies: ["React", "CSS3", "Framer Motion", "Responsive Design"],
    //   demoLink: "https://example.com",
    //   codeLink: "https://github.com"
    // },
    // {
    //   id: 5,
    //   title: "Recipe Finder App",
    //   category: "app",
    //   image: "/api/placeholder/600/400",
    //   description: "An application that allows users to search for recipes based on ingredients they have. Features include saving favorite recipes, dietary filtering, and meal planning.",
    //   technologies: ["React Native", "Firebase", "RESTful API", "Async Storage"],
    //   demoLink: "https://example.com",
    //   codeLink: "https://github.com"
    // },
    // {
    //   id: 6,
    //   title: "Dashboard UI Kit",
    //   category: "ui",
    //   image: "/api/placeholder/600/400",
    //   description: "A collection of reusable UI components designed for administrative dashboards. Includes data visualization tools, forms, tables, and navigation components.",
    //   technologies: ["React", "Styled Components", "Storybook", "D3.js"],
    //   demoLink: "https://example.com",
    //   codeLink: "https://github.com"
    // }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        {/* <div className="projects-filter">
          <button 
            className={activeFilter === 'all' ? 'active' : ''} 
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={activeFilter === 'web' ? 'active' : ''} 
            onClick={() => setActiveFilter('web')}
          >
            Web
          </button>
          <button 
            className={activeFilter === 'app' ? 'active' : ''} 
            onClick={() => setActiveFilter('app')}
          >
            Apps
          </button>
          <button 
            className={activeFilter === 'ui' ? 'active' : ''} 
            onClick={() => setActiveFilter('ui')}
          >
            UI/UX
          </button>
        </div> */}
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-project">
                    <i className="fas fa-eye"></i> Demo
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn-project">
                    <i className="fas fa-code"></i> Code
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;