import logo from '../../../assets/logo.png';
import '../../../assets/css/styles.css';
import React from 'react';
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
                            <li className="Navbar__mobile-item">
                                <a href="#" className="Navbar__mobile-link">Home</a>
                            </li>
                            <li className="Navbar__mobile-item">
                                <a href="#" className="Navbar__mobile-link">About</a>
                            </li>
                            <li className="Navbar__mobile-item">
                                <a href="#" className="Navbar__mobile-link">Services</a>
                            </li>
                            <li className="Navbar__mobile-item">
                                <a href="#" className="Navbar__mobile-link">Project</a>
                            </li>
                            <li className="Navbar__mobile-item">
                                <a href="#" className="Navbar__mobile-link">Blog</a>
                            </li>
                            <li className="Navbar__mobile-item">
                                <a href="#" className="Navbar__mobile-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        }
}

export default NavbarMobile;
