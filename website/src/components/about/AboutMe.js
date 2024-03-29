import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import './AboutMeStyles.css';

function AboutMe() {
  useEffect(() => {
    aos.init({duration: 800});
  }, []);
  return(
    <div className="about-container">
      <p className="hidden" id="AboutMe">A</p>
      <div className="header">
         <h1 data-aos="zoom-in">About Me</h1>
      </div>
      <div className="paragraph" data-aos="zoom-in-up">
        <p>I am a Junior Computer Science Major at George Mason University who loves to learn!
        I have experience as a Software Engineer Intern at Northrop Grumman, where I worked
        within the simulation subdivision of an Artificial Intelligence team. I mainly worked in
        Python during this internship. For summer 2024 I will be a Software Engineer Intern at Netflix! 
        <br></br> 
        I also have experience with web development technologies like React.js, Node.js, and 
        Express.js through personal projects. I am interested mostly in backend development, but I enjoy 
        full stack development as well.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;