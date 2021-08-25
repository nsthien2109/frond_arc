import React from 'react'
import { SiApacheairflow,SiAtom,SiElectron } from "react-icons/si";
import { AiOutlineCheck} from "react-icons/ai";

const Services = () => {
    return (
        <>
            <div className="AboutHome">
                <div className="AboutHomeHeader row FadeInLeft">
                    <div className="col-3 mobile-about-header">
                        <span className="AboutHomeSub">WHAT WE DO <br/></span>
                        <span className="AboutHomeTitle">We provide quality <br/> services</span>
                    </div>
                </div>

                <div className="DiscoverProjectContent row">
                    <div className="row col-12">
                        <div className="col-2 DiscoverProjectContent_line FadeInLeft">
                            <div className="DiscoverProjectLine"></div>
                        </div>
                        <div className="DiscoverProjectContentText col-8 FadeInLeft">
                            <b>Our services are summarized as follows. Architecture fusce ornare ut tortor ac hendrerit. Suspendisse sed sem tincidunt dui congue fermentum.</b>
                            <p>Quisque eu nunc bibe endum in finibus elit eget the solli citudin elit. Phasellus rutrum in lacus ut euismod. Vestibulum eleifend tortor orci, eu ornare tortor semper at. Duis scelerisque the nibhse drana moss puse.</p>
                        </div>
                    </div>
                </div>

                <div className="Service__container">
                    <div className="Service__our col-12 row">
                        <div className="Service__card col-4">
                            <div className="Service__item col-12">
                                <div className="Service__icon">
                                    <SiApacheairflow className="icon__service" size={55}/>
                                </div>
                                <h5>Architectural</h5>
                                <ul className="Service__list">
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Facility Programming</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Schematic Design</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Design Development</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Presentation Drawings</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Construction Documentation</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Interior Architecture</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Furniture, Fixture & Equipment</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Move Management</li>
                                </ul>
                            </div>
                        </div>

                        <div className="Service__card col-4">
                            <div className="Service__item col-12">
                                <div className="Service__icon">
                                    <SiAtom className="icon__service" size={55}/>
                                </div>
                                <h5>Specialty</h5>
                                <ul className="Service__list">
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Facility Condition Assessments</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Site / Master Planning</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Landscape Architecture</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Zoning & Variance Requests</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> 3D Computer Modeling</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Security / Safety Planning</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Site Plan Approval Services</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Technology Design</li>
                                </ul>

                            </div>
                        </div>

                        <div className="Service__card col-4">
                            <div className="Service__item col-12">
                                <div className="Service__icon">
                                    <SiElectron className="icon__service" size={55}/>
                                </div>
                                <h5>Engineering</h5>
                                <ul className="Service__list">
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Value Analysis</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Structural</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Mechanical</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Electrical</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> System Analysis</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Civil</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Lighting Design</li>
                                    <li className="Service__list-item"><AiOutlineCheck className="icon__service"/> Life Cycle Costing </li>                                
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Services;