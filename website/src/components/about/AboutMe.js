import { Component } from "react";
import './AboutMeStyles.css';

class AboutMe extends Component {
  render() {
    return(
      <div className="about-container">
        <div className="header">
          <h1 id="AboutMe">About Me</h1>
        </div>
        <div className="paragraph">
          <p>I am a Sophomore Computer Science Major who loves to learn! <br></br>
          I have experience with many languages, such as Java, Python, C++, <br></br>
          and Javascript. I also have experience with some Javascript frameworks <br></br>
          like Vue and React.</p>
       </div>
      </div>
    );
  }
}

export default AboutMe;