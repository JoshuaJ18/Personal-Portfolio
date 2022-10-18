import { Component } from "react";
import "./HomeStyles.css";
import programmer from './programmer.png';


class Home extends Component {
  render() {
    return(
      <div className="home-container" >
        <p className="hidden" id="Home">h</p>
        <h1 className="text">
          Hello, my name is <br/> Joshua Jones
        </h1>
        <div className="image-div">
          <img className="image" src={ programmer } alt="programmer"/>
        </div>
      </div>
    );
  }
}

export default Home;