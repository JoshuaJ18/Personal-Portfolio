import { useEffect } from "react";
import { ExperienceData } from "./ExperienceData";
import aos from "aos";
import "aos/dist/aos.css";
import "./ExperienceStyles.css";

function Experience() {
  useEffect(() => {
    aos.init({duration: 3000});
  }, []);
  return(
    <div className="experience-container">
      <div className="experience-header" data-aos="fade-up">
        <h1 id="Experience">Experience</h1>
        <hr></hr>
        {ExperienceData.map((item, index)=>{
          return(
            <ul className="experience-list">
              <li key={index} className={item.class}>
                <h2> {item.company} </h2>
                <h3 className="job-titles"> {item.jobTitle} </h3>
                <h3 className="dates"> {item.dates} </h3>
              </li>
            </ul>
          )
        })}
      </div>
    </div>
  );
}

export default Experience;