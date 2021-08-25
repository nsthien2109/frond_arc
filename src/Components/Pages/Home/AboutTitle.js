import '../../../assets/css/styles.css';
import imgAbout from '../../../assets/img/about.jpg'
import abBanner from '../../../assets/img/banner.jpg'

function AboutTitle() {
  return (
   <>
     <div className="AboutBannerTitle">
         <img src={abBanner} alt="title"/>
         <h4>ABOUT US</h4>
     </div>
   </>
  );
}

export default AboutTitle;
