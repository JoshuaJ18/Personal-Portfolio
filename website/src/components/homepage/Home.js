import { Component } from "react";
import { Parallax } from 'react-parallax';
import "./HomeStyles.css";
import background from './joshuaTree.jpg';


class Home extends Component {
  render() {
    return(
      <Parallax bgImage={ background } strength={ 800 }>
      <div className="container" >
        <p className="hidden" id="Home">h</p>
        <h1 className="introduction">
          Hello, my name <br></br> is Joshua Jones
        </h1>
      </div>
      </Parallax>
    );
  }
}

export default Home;