import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import './MenuCart.css'


function MenuCart() {
    return(
        <nav>
        <ul className="lista-menu">
            <li><PersonIcon /> <span className="lista-cart">Habilidades</span></li>
            <li><PersonIcon /> <span className="lista-cart">Habilidades</span></li>
            <li><PersonIcon /> <span className="lista-cart">Habilidades</span></li>
        </ul>
        </nav>
    )
};

export default MenuCart;