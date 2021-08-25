import React from 'react'
import AboutPartnerList from './AboutPartnerList';
import moduleName from '../../../assets/img/logos/1.png'

const AboutPartner = () => {
    return (
        <>
        <div className="AboutHome">
            <div className="AboutHomeHeader row FadeInLeft">
                <div className="col-3 mobile-about-header">
                    <span className="AboutHomeSub">OUR PARTNERS <br/></span>
                    <span className="AboutHomeTitle">Our Valuable<br/> Creative Partners </span>
                </div>
            </div>
            <AboutPartnerList/>
        </div>   
        </>
    )
}


export default AboutPartner;