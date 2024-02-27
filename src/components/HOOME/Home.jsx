import React, { useEffect, useState } from 'react';
import './Home.css';
import myImage from './myImage.png';
const TypingAnimation = ({ words, delay }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let currentWordIndex = 0;
    let currentCharIndex = 0;

    const intervalId = setInterval(() => {
      const currentWord = words[currentWordIndex];

      setDisplayedText(currentWord.substring(0, currentCharIndex));

      currentCharIndex++;

      if (currentCharIndex > currentWord.length) {
        currentWordIndex++;
        currentCharIndex = 0;
      }

      if (currentWordIndex >= words.length) {
        clearInterval(intervalId);
        setCompleted(true);

        // Delay before resetting the animation
        setTimeout(() => {
          setCompleted(false);
          currentWordIndex = 0;
          currentCharIndex = 0;
        }, 1000); // Adjust the delay as needed
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [words, delay, completed]);

  return (
    <div className="typing-container">
           <p>A</p>
      <div className="typing-text"> 
        {displayedText}
      </div>
    </div>
  );
};
function Home(){
  const words = ['Freelancer', 'Engineer', 'Web Devloper ', 'Enthusiastic coder'];
  return (
    <div className="home-container">
      <div className="home-containerc1">
       <div className="home-container2">
         <div className="hc1">HELLO!</div>
         <div className="text1">I'm
         <div className='text2'>Hari
         <div className='text3'>Sai</div>
         </div>
         </div>
         <div className="text22">
          <TypingAnimation words={words} delay={200}/></div>
         <div className="hc2">
               An Undergraduate
         </div>
         <div className="hc11">
         <div className="hc3">
             <a className="LIKENDIN" href="https://www.linkedin.com/in/parasa-hari-sai" target="_blank" rel="noopener noreferrer">
                 LINKEDIN
             </a>
         </div> 
         <div className="hc4">
             <a className="MYWORKS" href="https://www.github.com/harisaigithub" target="_blank" rel="noopener noreferrer">
                 MY WORKS
             </a>
              </div> 
              </div>
       </div>
         <div className="containerc2">
       <img src={myImage} alt="ME" />
       </div>
       </div>
      <div className="hmain"></div>
    </div> 
  );
};

export default Home;
