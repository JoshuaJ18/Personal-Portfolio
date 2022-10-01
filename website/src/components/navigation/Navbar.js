import { Component } from "react";
import { MenuData } from "./MenuData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick =()=>{
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    return(
      <nav className="navbar-items">
        <div className="menu-icons" onClick={this.handleClick}>
        <FontAwesomeIcon icon= { this.state.clicked ? faXmark : faBars
        }  />
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index)=>{
            return(
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            )
          })}
    
        </ul>
      </nav>
    );
  }
}

export default Navbar;