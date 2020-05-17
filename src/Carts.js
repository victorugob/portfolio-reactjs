import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import './carts.css';
import SideCard from './Side-card';


function Carts() {
    return(
        <>
        <SideCard />
            <section className="standard-card">
                <div className="card-raw">
                    <a href="#maoe"><h4>Clica aqui</h4></a>
                    <div className="card-row">
                        <AboutMe />

                    </div>
                </div>
            </section>
            <section className="standard-card">
                <div className="card-raw">
                    <div className="card-row">
                        <Skills id="maoe" />

                    </div>
                </div>
            </section>
            </>
        )
};

export default Carts;