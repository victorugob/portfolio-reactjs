import React from 'react';
import './MenuCart.css';
import WebIcon from '@material-ui/icons/Web';
import PortraitIcon from '@material-ui/icons/Portrait';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import TimelineIcon from '@material-ui/icons/Timeline';
import EmailIcon from '@material-ui/icons/Email';
import AboutMe from './AboutMe';
import Skills from './Skills';
import { Link, NavLink } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';




function MenuCart() {
 
    
    return(
        <nav>
        <ul className="lista-menu">
           <a href="#maoe"> <li><WebIcon /> <span className="lista-cart">Início</span></li></a>
            <li><PortraitIcon /> <span className="lista-cart">Sobre</span></li>
            <li><LaptopMacIcon /> <span className="lista-cart">Habilidades</span></li>
            <li><TimelineIcon /> <span className="lista-cart">Experiência</span></li>
            <li><EmailIcon /> <span className="lista-cart">Contato</span></li>
        </ul>
        </nav>
    )
};

export default MenuCart;