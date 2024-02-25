import React from 'react';
import './Me.css';
import myImage from './me.jpg'
const Me = () => {
  return (
    <div className='me-container'>
         <div className="container1">
         About Me
         </div>
         <div className="c2">
         <div className="c0">
         <div className="img">
         <img className="profile-image" src={myImage} alt="Hari Sai"/>
         </div>
         <div className="txt">
         <ul className="contact-info">
           <li>Email: harisaiparasa@gmail.com</li>
           <li>Phone:+91 95819 12835</li>
        </ul>
        <a href="https://www.canva.com/design/DAF5foCas_c/HvuS7R5LdrdxCXK7EaZUNw/view?utm_content=DAF5foCas_c&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noopener noreferrer" className="resume-button">Download Resume</a>
         </div>
         </div>
        <div className="c11">
        <p>I'm Hari Sai 😉, a passionate problem-solver with a knack for building user-friendly web applications based on client requirements . My journey began when I began to work on my MERN project.</p>          
        <p>Since then, I've honed my skills in Java, Python, React.js, SQL, AWS, and Google Cloud, building efficient platform to address the issues of daily life problems and tackling problems like E-commerence inventory management, much more.</p>
        <p>Beyond the code, I excel at Communication Skills, Problem-Solving & Critical Thinking, Adaptability & Resilience, Teamwork & Collaboration, Time Management & Organization and thrive in fast-paced environments. I'm eager to leverage my skills and learn from industry leaders to build innovative solutions.</p>  
      </div>
      </div>
      </div>
)
}
export default Me