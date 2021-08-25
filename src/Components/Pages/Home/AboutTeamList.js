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
        team: [],
    };

    //**Component Did mount func */
    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/nsthien2109/mookdb/design_team').then(res => {
            this.setState({team: res.data});
            console.log(this.state.team);
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
        <div className="AboutTeam__container row col-12" ref="box1">
                    {
                  this.state.team.map(item => 
                    <div className="AboutTeam__card col-4" >
                            <div className="AboutTeam__info_detail">
                                <img src={item.img} className="img__member"/>
                                <p>{item.sevices}</p>
                                <ul className="AboutTeam__member-social">
                                    <li className="AboutTeam__member-social-item"><RiLinkedinFill/></li>
                                    <li className="AboutTeam__member-social-item"><RiInstagramLine/></li>
                                    <li className="AboutTeam__member-social-item"><RiTwitterFill/></li>
                                </ul>
                            </div>
                            <p className="AboutTeam__name">
                                    {item.name} <span>/ {item.position}</span>
                            </p>
                    </div>
                        )
                    }
            </div> 
    )
    }
}

export default ProjectList;
