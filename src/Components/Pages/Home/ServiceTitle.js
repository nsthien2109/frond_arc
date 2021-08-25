import '../../../assets/css/styles.css';
import abBanner from '../../../assets/img/banner.jpg'

function ServiceTitle() {
  return (
   <>
     <div className="AboutBannerTitle">
         <img src={abBanner} alt="title"/>
         <h4>SERVICES</h4>
     </div>
   </>
  );
}

export default ServiceTitle;
