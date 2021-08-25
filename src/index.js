import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Pages/Home/Nav';
import Slider from './Components/Pages/Home/Slider';
import AboutHome from './Components/Pages/Home/AboutHome';
import DiscoverProject from './Components/Pages/Home/DiscoverProject';
import Footer from './Components/Pages/Home/Footer';
import NavbarMobile from './Components/Pages/Home/NavMobile';
import RouterWeb from './route/Route'
import './assets/css/responsive.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RouterWeb/>
    <Navbar />
    <NavbarMobile />
    <Slider/>
    <AboutHome/>
    <DiscoverProject/>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
