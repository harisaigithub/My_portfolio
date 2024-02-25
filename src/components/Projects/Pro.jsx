import React from 'react'
import './Pro.css'
import p1 from './projectimages/p1.jpeg'
import p2 from './projectimages/p2.jpeg'
import p3 from './projectimages/p3.jpeg'
import p4 from './projectimages/p4.jpg'
import p5 from './projectimages/p5.jpeg'
import p6 from './projectimages/p6.jpeg'

function Pro() {
  return (
    <div className="pcontainer1">
      <div className="pc0">
        Projects
       </div>
       <div className="pc111">
          <div className="pc1">
              <div className="pc11">
               <img className="p1-image" src={p1} alt="Flipkart Clone"/>
              </div>
              <a href="https://flipkart-clonebyhari.netlify.app/" target="_blank" rel="noopener noreferrer" className="p-button">Flipkart Clone</a>
              <div className="pt">
                <li>Click Flipkart Clone ⬉ to navigate</li>
                <ul>☆Project Description:</ul>
                <p>a Flipkart Clone Built with HTML and CSS
                  In this project, I have built a functional clone of the popular Indian e-commerce platform Flipkart, using only HTML and CSS.</p>
                  <p>This project showcases my understanding of front-end development principles and my ability to translate them into a real-world application.</p>
              </div>
              <a href="https://github.com/harisaigithub/PROJECTS__/tree/main/Flipkart_clone.file"  target="_blank" rel="noopener noreferrer" className="g-button">View in Github</a>
           </div>
          <div className="pc2">
              <div className="pc21">
              <img className="p2-image" src={p2} alt="E-commerce Inventory Management"/>   
              </div>
              <a href="www.example.com" className="p2-button">E-commerce Inventory Management</a>
              <div className="pt">
                <li>Click E-commerce Inventory ⬉ to navigate</li>
                <ul>☆Project Description:</ul>
                <p>This project aims to develop an interactive and data-driven inventory management system specifically designed for e-commerce businesses.</p><p>Leveraging the statistical and analytical capabilities of R programming, this system will empower users to optimize inventory levels, track product performance, and make informed decisions that enhance profitability and customer satisfaction.</p>
              </div>
              <a href="https://github.com/harisaigithub/PROJECTS__/tree/main/R%20project"  target="_blank" rel="noopener noreferrer" className="g-button">View in Github</a>
          </div>
            <div className="pc3">
              <div className="pc31">
                <img className="p3-image" src={p3} alt="E-Commerce Inventory"/>
              </div>
              <a href="www.example.com" className="p-button">NexuSmart</a>
              <div className="pt">
                <li>Click NexuSmart ⬉ to navigate</li>
                <ul>☆Project Description:</ul>
                <p>Nexusmart is a web application designed to help businesses streamline their project management processes.</p> 
                  <p>It provides a central platform for teams to collaborate on tasks, track progress, and share files, implented using HTML, CSS, JavaScript, and Django Templates for Front end , Django, PostgreSQL for Backend. (more details in my Github)</p>
              </div>
              <a href="https://github.com/harisaigithub/PROJECTS__/tree/main/nexusmart" target="_blank" rel="noopener noreferrer" className="g1-button">Evolving</a>
            </div>
      </div>
      <div className="pc222">
        <div className="pc4">
            <div className="pc41">
            <img className="p4-image" src={p4} alt="MY Portfolio"/>
            </div>
            <a href="www.example.com" className="p-button">My Portfolio</a>
              <div className="pt">
                <li>Click Portfolio ⬉ to navigate</li>
                <ul>☆Project Description:</ul>
                <p>My portfolio website is a dynamic and interactive platform designed to showcase my skills, experience, and projects to the world.</p><p>Built with a blend of cutting-edge technologies, the site delivers a visually stunning and engaging user experience across all devices.</p>
              </div>
              <a href="https://www.github.com/harisaigithub"  target="_blank" rel="noopener noreferrer"className="g-button">View in Github</a>
            </div>
            <div className="pc5">
            <div className="pc51">
            <img className="p5-image" src={p5} alt="My Portfolio"/>  
            </div>
            <a href="www.example.com" className="p-button">Type Frenzy</a>
              <div className="pt">
                <li>Click Type Frenzy ⬉ to navigate</li>
                <ul>☆Project Description:</ul>
                <p><b>Type Frenzy - A Thrilling Typing Game </b></p><p>Get ready to test your typing speed and accuracy with Type Frenzy, an exciting web-based typing game developed using HTML, CSS, ReactJS and JavaScript. </p><p>This project offers a challenging and engaging experience for players of all skill levels</p>
              </div>
              <a href="www.example.com" className="g1-button">Stay Tuned!</a>
            </div>
            <div className="pc6">
            <div className="pc61">
            <img className="p6-image" src={p6} alt="Truth Seeker"/>  
            </div>
            <a href="www.example.com" className="p-button">Truth Seeker</a>
              <div className="pt">
                <li>Click Truth Seeker ⬉ to navigate</li>
                <ul>☆Project Description:</ul>
                <p><b>Unmask the Truth:Spotting Dis-information with AI </b></p>
                <p>In today's information overload, discerning truth from fiction can be a daunting task.</p><p> Introducing Truth Seeker, your personal fake news detection app designed to empower you with the knowledge and tools to navigate the digital landscape with confidence.</p>
              </div>
              <a href="www.example.com" className="g1-button">Launching Soon!</a>
            </div>
        </div>
        <div className="pc333">
          <p>I Like to solve Business Probelms through modern solutions, visit my Github to Explore more such projects I developed 💛</p>
        </div>
    </div>
  )
}

export default Pro