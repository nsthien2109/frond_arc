import React from 'react';
import axios from 'axios';
import '../../../assets/css/styles.css';
import sr from './ScrollReveal';

class ProjectList extends React.Component {

    //**Props */
    props: Props;

    
    /**State */
    state = {
        projects: [],
    };

    //**Component Did mount func */
    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/nsthien2109/mookdb/projects').then(res => {
            this.setState({projects: res.data});
            console.log(this.state.projects);
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
        <>
          <div className="projectList__container">
          <div className="projectList__item-card col-12 row" ref="box1">
              {
                  this.state.projects.map(item => 
                      <div className="projectList__item projectList__item-mobile  col-6" ref="box1">
                        {
                            item.img.map(img_x => 
                                <img src={img_x.img_1} className="projectList__item-img"/>
                            )
                        }  
                        <div className="projectList__item-info">
                            <span className="projectList__item-id" ref="box1">0{item.id}. Project</span>
                            <div className="projectList__item-name">{item.name}</div>
                        </div>                  
                      </div>
                  )
              }
          </div>
          </div>  
        </>
    )
    }
}

export default ProjectList;
