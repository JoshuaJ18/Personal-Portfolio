import { Component } from "react";
import "./HomeStyles.css";


class Home extends Component {
  render() {
    return(
      <div className="home-container" >
        <p className="hidden" id="Home">h</p>
        <div className="intro-div">
          <h1 className="intro-text">
            Hello, my name is Joshua Jones
          </h1>
        </div>
        <div className="text-div">
          <p className="text"> I am a sophomore Computer Science Major</p>
        </div>
      </div>
    );
  }
}

export default Home;