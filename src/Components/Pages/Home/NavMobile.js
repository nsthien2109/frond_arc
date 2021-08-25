import logo from '../../../assets/logo.png';
import '../../../assets/css/styles.css';
import React from 'react';
import {Link,} from "react-router-dom";
import { RiMenuLine,RiCloseLine } from "react-icons/ri";

class NavbarMobile extends React.Component {
    state = { isActive: false };
 
    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
    };

 

  render () {
      const isActive = this.state.isActive;
        return (
                <div>
                    <div className="Navbar__mobile">
                        <img src={logo} className="logo__img-mobile"/>
                        <div className="Navbar__toggle" onClick={this.handleToggle} id="Navbar__toggle">
                            {isActive ? <RiCloseLine size={25} /> : <RiMenuLine size={25}/>}
                        </div>
                    </div>
                    <div className={isActive ? "open_nav_mobile Navbar__mobile-container" : "Navbar__mobile-container"}>
                        <ul className="Navbar__mobile-list">
                           <Link to="/">
                            <li onClick={this.handleToggle} className="Navbar__mobile-item Navbar__mobile-link">
                                Home
                            </li>
                            </Link>
                            <Link to="/about">
                            <li onClick={this.handleToggle} className="Navbar__mobile-item Navbar__mobile-link">
                                About
                            </li>
                            </Link>
                            <Link to="/service">
                            <li onClick={this.handleToggle} className="Navbar__mobile-item Navbar__mobile-link">
                                Services
                            </li>
                            </Link>
                            <Link to="/projects">
                            <li onClick={this.handleToggle} className="Navbar__mobile-item Navbar__mobile-link">
                                Project
                            </li>
                            </Link>
                            <Link  to="/blog">
                            <li onClick={this.handleToggle} className="Navbar__mobile-item Navbar__mobile-link">
                                Blog
                            </li>
                            </Link>
                            <Link to="/contact">
                            <li onClick={this.handleToggle} className="Navbar__mobile-item Navbar__mobile-link">
                                Contact
                            </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            );
        }
}

export default NavbarMobile;
