import React from 'react';
import '../src/hero.css'
import Typewriter from 'typewriter-effect';



 

export default function Hero() {
    return(
        
        <>
        
        
        <div className="box-terminal">
        <div id="bar">
    <div id="red">
    </div>
    <div id="yellow">
    </div>
    <div id="green">
    </div>
</div>
    <div id="screen">
        <p class="font"><span className="terminalf">victorugo</span><span className="terminalS"> MINGW64</span>
        <span className="terminalT"> C:/employment</span></p>
        <p class="font">$ person -status -all</p>
        <p class="font">Status: unemployed (AVAIBLE TO HIRE) </p>

        <p class="font"><span className="terminalf">victorugo</span><span className="terminalS"> MINGW64</span>
        <span className="terminalT"> C:/employment</span></p>
        <p class="font">$ person -list -info</p>

        <p class="font">name: "Victor Hugo Brito"</p>
        <p class="font">age: 27</p>
        <p class="font">skills: HTML/CSS, JavaScript, Node.Js, ReactJs and React Native</p>

        <p class="font"><span className="terminalf">victorugo</span><span className="terminalS"> MINGW64</span>
        <span className="terminalT"> C:/employment</span></p>
        <p class="font">        <Typewriter
  options={{
    strings: ['$ person -hire'],
    autoStart: true,
    delay: 50,
    loop: true,
    cursor: "_",
    wrapperClassName: "font",
    cursorClassName: "font",
  }}
/></p>


    </div>
    </div>
    </>
    )
};