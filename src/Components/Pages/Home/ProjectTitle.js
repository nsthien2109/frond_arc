import '../../../assets/css/styles.css';
import abBanner from '../../../assets/img/banner.jpg'

function ProjectTitle() {
  return (
   <>
     <div className="AboutBannerTitle">
         <img src={abBanner} alt="title"/>
         <h4>PROJECTS</h4>
     </div>
   </>
  );
}

export default ProjectTitle;
