import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import "./HomeStyles.css";


function Home() {
  useEffect(() => {
    aos.init({duration: 50});
  }, []);
  return(
    <div className="home-container" >
      <p className="hidden" id="Home">h</p>
      <div className="intro-div">
        <h1 className="intro-text" data-aos="fade-right">
          Hello, my name is Joshua Jones
        </h1>
      </div>
      <div className="text-div">
        <p className="text" data-aos="fade-right"> I am a Computer Science Major</p>
      </div>
    </div>
  );
  
}

export default Home;