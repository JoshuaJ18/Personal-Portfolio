import { Component } from "react";
import { MenuData } from "./MenuData";
import "./NavbarStyles.css";

class Navbar extends Component {
  render() {
    return(
      <nav className="NavbarItems">
        <ul className="nav-menu">
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