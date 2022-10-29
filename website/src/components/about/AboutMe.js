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
        <p>I am a Sophomore Computer Science Major who loves to learn!
        I have experience with many languages, such as Java, Python, C++, 
        and Javascript. I also have experience with some Javascript frameworks 
        like Vue and React. I am currently taking Object Oriented Programming in 
        Java and will be taking Data Structures and Algorithms in Spring 2023. 
        <br></br><br></br>Currently my interests are Front End Development, Full Stack Development,
        and Embedded Programming. I am learning a lot of new things within these specialties
        and hoping to gain experience through internships to narrow it down to one specialty
        before graduation.</p>
      </div>
    </div>
  );
}

export default AboutMe;