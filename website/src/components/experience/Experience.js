import { Component } from "react";
import { ExperienceData } from "./ExperienceData";
import "./ExperienceStyles.css";

class Experience extends Component {
  render() {
    return(
      <div className="experience-container">
        <div className="experience-header">
          <h1 id="Experience">Experience</h1>
          <hr></hr>
          {ExperienceData.map((item, index)=>{
            return(
              <ul className="experience-list">
                <li key={index} className={item.class}>
                  <h2> {item.company} </h2>
                  <h3 className="job-titles"> {item.jobTitle} </h3>
                  <h3 className="dates"> {item.dates} </h3>
                  <ul className="job-description">
                    <li> {item.jobDescription1} </li>
                  </ul>
                </li>
              </ul>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Experience;