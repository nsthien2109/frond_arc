import React, { useState,useEffect } from "react";
import '../../../assets/css/styles.css';
import projectApi from '../../../api/projectApi';
import ProjectList from './ProjectList'
function DiscoverProject() {


 
  const [projectList, setProjectList] = useState([]);
    


  useEffect(() => {

      const fetchProject = async () =>{
          try {
              const response = await projectApi.getAll();
              setProjectList(response);
              console.log(response)
          } catch (error) {
              console.log("Failed to fetchProject List :", error);
          }
      }
      fetchProject();
  },[])



  return (
   <>
    <div className="DiscoverProjectHome">
        <div className="DiscoverProjectHeader row FadeInLeft">
            <div className="col-3 Discover__header-mobile">
                <span className="DiscoverProjectSub">DISCOVER <br/></span>
                <span className="DiscoverProjectTitle">Our Unique Latest <br/>Projects</span>
            </div>
        </div>

        <div className="DiscoverProjectContent row">
            <div className="row col-12">
                <div className="col-2 DiscoverProjectContent_line FadeInLeft">
                    <div className="DiscoverProjectLine"></div>
                </div>
                <div className="DiscoverProjectContentText col-8 FadeInLeft">
                    <b>Quisque eu nunc bibe endum in finibus elit eget the solli citudin elit. Phasellus rutrum in lacus ut eyumode. Vestibulum eleifend tortor orci, eu ornare tortor semper at.</b>
                    <p>Projects scelerisque the nibhse drana moss pulvinar laoreet. Nulla molestie finibus dignissim. Nunc ultrices odio mauris fermentum the gravida varius ex lacnia. Proin dictum nisl orci drana compani eu scelerisque risus feugiat sit amet. Vestibulum condimentum tempoeu the venenatis.</p>
                </div>
            </div>
        </div>

        <div className="DiscoverProjectContent__Block">
            <div className="DiscoverProjectContent__List">
                <ul className="ListListProject__fitter">
                    <li className="ListProject__item">All</li>
                    <li className="ListProject__item">Interior</li>
                    <li className="ListProject__item">Exterior</li>
                    <li className="ListProject__item">Urban</li>
                </ul>
            </div>
        </div>
        <ProjectList />
    </div>
   </>
  );
}

export default DiscoverProject;
