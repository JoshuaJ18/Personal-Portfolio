import { useEffect } from "react";
import { ProjectData } from "./ProjectData";
import aos from "aos";
import "aos/dist/aos.css";
import './ProjectStyles.css';


function Project() {
  useEffect(() => {
    aos.init({duration: 500});
  }, []);
    return (
      <div className="project-container">
        <p className="hidden" id="Projects">P</p>
        <div className="projects-header">
          <h1 data-aos="fade-in">Projects</h1>
        </div>
         {ProjectData.map((item, index)=>{
          return(
            <ul className="project-list">
              <li key={index} className={item.class} data-aos="fade-in">
                <h1> {item.pName} </h1>
                <img src={item.img} className="img"/>
                <p> {item.description} </p>
                <a href={item.link} target="_blank"> Link to GitHub </a>
              </li>
            </ul>
          )
         })}
      </div>
    );

}

export default Project;