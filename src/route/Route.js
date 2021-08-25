import React from 'react';
import Navbar from '../Components/Pages/Home/Nav';
import NavbarMobile from '../Components/Pages/Home/NavMobile';
import Slider from '../Components/Pages/Home/Slider';
import AboutHome from '../Components/Pages/Home/AboutHome';
import AboutTeam from '../Components/Pages/Home/AboutTeam'
import AboutPartner from '../Components/Pages/Home/AboutPartner';
import AboutTitle from '../Components/Pages/Home/AboutTitle';
import DiscoverProject from '../Components/Pages/Home/DiscoverProject';
import ServiceTitle from '../Components/Pages/Home/ServiceTitle';
import ProjectTitle from '../Components/Pages/Home/ProjectTitle';
import BlogTitle from '../Components/Pages/Home/BlogTitle';
import ContactTitle from '../Components/Pages/Home/ContactTitle';
import BlogList from '../Components/Pages/Home/BlogList'
import Services from '../Components/Pages/Home/Services';

import Footer from '../Components/Pages/Home/Footer';
import '../assets/css/responsive.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



function RouterWeb() {
  return (
      <>
        <Router>
            <Navbar />
            <NavbarMobile />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/service" component={Service}/>
                <Route path="/projects" component={Project}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </Router>
    </>
  );
}



const Home = () =>(
    <>
        <Slider/>
        <AboutHome/>
        <DiscoverProject/>
    </>    
);


const About = () =>(
    <>  
        <AboutTitle/>
        <AboutHome/>
        <AboutTeam/>
        <AboutPartner/>
    </>    
);


const Service = () =>(
    <>  
        <ServiceTitle/>
        <Services/>
    </>   
);


const Project = () =>(
    <>  
        <ProjectTitle/>
        <DiscoverProject/>
    </>   
);

const Blog = () =>(
    <>  
        <BlogTitle/>
        <BlogList/>
    </>   
);

const Contact = () =>(
    <>  
        <ContactTitle/>
    </>   
);



export default RouterWeb;
