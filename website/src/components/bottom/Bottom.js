import { Component } from "react";
import './BottomStyles.css';

class Bottom extends Component {
  render() {
    return(
      <div className="bottom-container">
        <div className="bottom-hr">
          <hr id="Contact"></hr>
        </div>
        <div className="text">
          <ul>
            <li><a href="https://drive.google.com/file/d/1jf91w-4iQP5ZGDm_ZBHwXU_oRFEbFHED/view?usp=sharing" target="_blank">Resume</a></li>
            <li><a href="https://github.com/JoshuaJ18" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/joshuaj18/" target="_blank">Linkedin</a></li>
            <li><a href="mailto: joshuanjones18@gmail.com">Contact Me</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Bottom;