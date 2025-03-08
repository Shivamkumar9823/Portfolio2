import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_l3gi0oi", // Replace with your EmailJS Service ID
      "template_pgyhz4m", // Replace with your EmailJS Template ID
      e.target, 
      "4PwN7kHOoq634M8aP" // Replace with your EmailJS Public Key
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Location</h3>
                <p>Srinagar, India</p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>shivamkumarsingh2020@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+91 9103583016</p>
              </div>
            </div>
            
            <div className="contact-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            {formSubmitted ? (
              <div className="form-success">
                <i className="fas fa-check-circle"></i>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message" 
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;