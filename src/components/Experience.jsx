import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "SDE Intern",
      company: "Dasho Retails",
      location: "pathankot Pubjab, India",
      period: "Dec 2024 - Feb 2025",
      responsibilities: [
    "Developed a multi-vendor e-commerce web app with secure payment gateway integration and Shiprocket for order fulfillment.",
    "Implemented key features like vendor management, order processing, and user authentication to enhance platform functionality.",
    "Optimized backend APIs and database queries to improve application performance and scalability.",
    "Collaborated with the development team to debug issues and enhance the overall user experience."
]

    },
    {
      id: 2,
      position: "Project Intern",
      company: "IIT BHU",
      location: "Varanasi, INDIA",
      period: "Mar 2020 - Dec 2021",
      responsibilities: [
    "Developed machine learning models for ECG signal processing, focusing on noise filtering and feature extraction to enhance signal clarity.",
    "Collaborated with research teams to refine algorithms, improving the accuracy and reliability of biomedical signal analysis.",
    "Implemented data preprocessing techniques to optimize model performance and reduce signal distortions.",
    "Conducted experiments and analyzed results to validate the effectiveness of the developed models."
]
    },
    // {
    //   id: 3,
    //   position: "Web Developer Intern",
    //   company: "StartUp Studio",
    //   location: "City, Country",
    //   period: "May 2019 - Feb 2020",
    //   responsibilities: [
    //     "Assisted in developing front-end components for client websites",
    //     "Created responsive layouts using HTML, CSS, and JavaScript",
    //     "Fixed bugs and improved website performance",
    //     "Participated in team meetings and contributed ideas for project improvements"
    //   ]
    // }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                <p className="location">{exp.location}</p>
                <p className="period">{exp.period}</p>
                <ul className="responsibilities">
                  {exp.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;