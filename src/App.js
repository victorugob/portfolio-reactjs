import React from 'react';
import './App.css';
import MenuCart from './MenuCart';

import './global.css';

import WebAssetIcon from '@material-ui/icons/WebAsset';
import PersonIcon from '@material-ui/icons/Person';

import avatar from './images/web-corte.png';


function App() {
  return (
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
  );
}

export default App;
