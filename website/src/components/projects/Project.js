import { Component } from "react";
import { ProjectData } from "./ProjectData";
import './ProjectStyles.css';


class Project extends Component {
  render () {
    return (
      <div className="project-container">
        <div className="projects-header">
          <h1 id="Projects">Projects</h1>
        </div>
         {ProjectData.map((item, index)=>{
          return(
            <ul className="project-list">
              <li key={index} className={item.class}>
                <h1> {item.pName} </h1>
                <img src={item.img} className="img"/>
                <p> {item.description} </p>
              </li>
            </ul>
          )
         })}
      </div>
    );
  }
}

export default Project;