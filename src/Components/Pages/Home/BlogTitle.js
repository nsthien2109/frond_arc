import '../../../assets/css/styles.css';
import abBanner from '../../../assets/img/banner.jpg'

function BlogTitle() {
  return (
   <>
     <div className="AboutBannerTitle">
         <img src={abBanner} alt="title"/>
         <h4>BLOGS</h4>
     </div>
   </>
  );
}

export default BlogTitle;
