import React from 'react';
import AboutTeamList from './AboutTeamList';

 const AboutTeam = () => {
    return (
        <>
        <div className="AboutHome">
            <div className="AboutHomeHeader row FadeInLeft">
                <div className="col-3 mobile-about-header">
                    <span className="AboutHomeSub">ARCHITECT <br/></span>
                    <span className="AboutHomeTitle">Our Architect and<br/> Design Team </span>
                </div>
            </div>
            <AboutTeamList/>
        </div>   
        </>
    )
}

export default AboutTeam;