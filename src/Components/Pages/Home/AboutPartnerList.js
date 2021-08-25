import React from 'react';
import axios from 'axios';
import '../../../assets/css/styles.css';
import sr from './ScrollReveal';
import { RiLinkedinFill,RiInstagramLine , RiTwitterFill } from "react-icons/ri";


class ProjectList extends React.Component {

    //**Props */
    props: Props;

    
    /**State */
    state = {
        logos: [],
    };

    //**Component Did mount func */
    componentDidMount() {
        axios.get('http://localhost:3000/partner_logo').then(res => {
            this.setState({logos: res.data});
            console.log(this.state.logos);
        });


        const config = {
            origin: 'left',
            duration: 2000,
            delay: 150,
            distance: '30px',
            scale: 0.99,
            easing: 'ease',
        }
        sr.reveal(this.refs.box1, config)

    }



    render() {
    return (
        <div className="AboutPartner__container row col-12">
            <div className="AboutPartner__intro col-3">
                    <div className="AboutPartner__intro-detail col-12">
                        Quisque eu nunc bibe endum in finibus elit eget the solli citudin elit. Phase inle ellus rutrum lacus euismoder.
                        Vestibulum eleifend tortor orci eornare tortor semper at. Duis the sceleri the nibhse drana moss pulvinar.
                    </div>
                </div>

                <div className="AboutPartner__logo col-8">
                    <div className="AboutPartner__logo-detail row col-12">
                    {
                        this.state.logos.map(item => 
                            <div className="AboutPartner__card col-3">
                                <div className="AboutPartner__card-item">
                                    <img src={item.logo_p} alt="hehe"/>
                                </div>
                            </div>
                                )
                            }
                    </div>
                </div>
            </div> 
    )
    }
}

export default ProjectList;
