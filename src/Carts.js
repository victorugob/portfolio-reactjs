import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import './carts.css';
import SideCard from './Side-card';
import Hero from './Hero';


function Carts() {
    return(
        <>
        <SideCard />

        <section className="standard-card-hero">
                <div className="card-raw-hero">
                    <div className="card-row-hero">
                    <Hero />

                    </div>
                </div>
            </section>
        

            <section className="standard-card">
                <div className="card-raw">
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