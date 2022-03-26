import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <Newsletter/>
    {/* <FooterOverlay /> */}

    <div className="app__footer-links">
    <div className="app__footer-links_contact">
      <h1 className="app__footer-headtext">Contact Us</h1>  
      <p className="p__opensans">1896 Hyde St, San Francisco, CA 94109-2109</p>
      <p className="p__opensans">+1 212 343 1234</p>
      <p className="p__opensans">+1 212 343 1234</p>
    </div>  
    <div className="app__footer-links_logo">
    <img src={images.gericht} alt="footer_logo" />  
    <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others"</p>
    <img src={images.spoon} style={{marginTop:'15'}} className="spoon__img" alt="spoon" />
    <div className="app__footer-links_icons">
      <FiFacebook/>
      <FiInstagram/>
      <FiTwitter/>
    </div>
    </div>  
    <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Opening hours</h1>  
        <p className="p__opensans">Monday - Friday</p>  
        <p className="p__opensans">08:00 am - 12:00 am </p>  
        <p className="p__opensans">Saturday - Sunday</p>    
        <p className="p__opensans">08:00 am - 12:00 am </p>  
    </div>  
    
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2021 GERICHT. All rights reserved</p>
    </div>
  </div>
);

export default Footer;


