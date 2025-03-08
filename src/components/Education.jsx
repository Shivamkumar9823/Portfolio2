import React from 'react';

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: "Computer Science and Engineering",
      institution: "National Institute of Technology Srinagar",
      location: "Srinagar, India",
      period: "2022 - 2026",
      description: "Specialized in Web Technologies. Graduated with distinction and completed thesis on React performance optimization techniques."
    },
    {
      id: 2,
      degree: "Higher Secondary (CBSC)",
      institution: "Morning Star Children's Academy ",
      location: "Orai,Uttar Pradesh, India",
      period: "2020 - 2021",
      description: "Completed Class 12 with an aggregate of 85%, building a strong foundation in Mathematics, Science ."
    },
    {
      id: 3,
      degree: "Secondary School (CBSC)",
      institution:"Morning Star Children's Academy",
      location: "Orai, Uttar Pradesh, India",
      period: "2018-2019",
      description: "Completed Class 10 with an aggregate of 92%, building a strong foundation in Mathematics, Science ."
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-timeline">
          {educations.map(education => (
            <div key={education.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{education.degree}</h3>
                <h4>{education.institution}</h4>
                <p className="location">{education.location}</p>
                <p className="period">{education.period}</p>
                <p className="description">{education.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;