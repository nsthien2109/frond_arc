import React from 'react';
import logo from '../../../assets/logo.png';
import '../../../assets/css/styles.css';
import {RiFacebookCircleFill,RiInstagramFill,RiPinterestFill} from "react-icons/ri";

const Footer = () => {
    return (
        <>
            <div className="footer" id="footer">
                <div className="footer__container row col-12">
                    <div className="footer__logo col-3">
                        <img src={logo}/>
                        <p>Copyright @2021 nsthien</p>
                    </div>

                    <div className="footer__getintouch col-3">
                        <span>Get in touch</span>
                        <p>nsthien2109@gmail.com</p>
                        <p>0705459542</p>
                    </div>

                    <div className="footer__location col-3">
                        <span>Location</span>
                        <p>Hoa Hai , Ngu Hanh Son</p>
                        <p>55000 Da Nang , VietNam</p>
                    </div>

                    <div className="footer__social col-3">
                        <span>Follow us</span>
                        <div className="social">
                            <ul className="social__list">
                                <li className="social__item">
                                    <a className="social__link"><RiFacebookCircleFill/></a>
                                </li>
                                <li className="social__item">
                                    <a className="social__link"><RiInstagramFill/></a>
                                </li>
                                <li className="social__item">
                                    <a className="social__link"><RiPinterestFill/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;