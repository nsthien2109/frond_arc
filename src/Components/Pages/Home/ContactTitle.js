import '../../../assets/css/styles.css';
import abBanner from '../../../assets/img/banner.jpg'

function ContactTitle() {
  return (
   <>
     <div className="AboutBannerTitle">
         <img src={abBanner} alt="title"/>
         <h4>CONTACT</h4>
     </div>
   </>
  );
}

export default ContactTitle;
