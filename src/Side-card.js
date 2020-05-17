import React from 'react'
import MenuCart from './MenuCart';
import './sidecard.css';
import './global.css';


import avatar from './images/web-corte.png';
import Carts from './Carts';


export default function SideCard() {
    return(
        <>
        <div className="site-container">
        <div id="side-cart">
        <img className="avatar" src={avatar} alt="Logo" />
        <h1 className="cart-name">Victor Hugo</h1>
         <span className="cart-dev">Desenvolvedor Web</span>
          <div className="cart-inside">
         <MenuCart />

      
      
          </div>
      
        </div>
        </div>
    </>
    )
};