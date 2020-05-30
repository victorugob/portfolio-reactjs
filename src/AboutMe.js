import React from 'react'
import './aboutme.css';
import avatar from '../src/images/web-corte.png';



export default function AboutMe() {
    return(
        <main class="content">
        <div className="cartas">
            <section className="wrap-all">
                <section className="about-me">
                    <h2 className="about-me-card">SOBRE MIM</h2>
                    <div className="about-me-content">
                        <div className="about-pic">
                        <img className="about-me-avatar" src={avatar} />
                        </div>
                        <div className="about-subtitle"><h4>Afinal, quem sou eu?</h4></div> <br />
                       <div className="about-me-descript"> <p>Sed congue nunc nisi, eget cursus diam lacinia eget. 
                            Morbi tristique nunc sed mauris ornare, vel tincidunt metus pulvinar. 
                            Phasellus dolor nunc, auctor quis venenatis in, vestibulum ut sem. 
                            Cras tristique consectetur ultrices. Mauris arcu ligula, tristique nec 
                            tellus nec, lobortis feugiat lectus. Nulla molestie convallis neque, id 
                            gravida mauris ultrices tempus. Pellentesque non efficitur mauris. Etiam 
                            ut neque enim.</p>
                            </div>

                    </div>
                </section>

            </section>
        </div>

    </main>
    )
};