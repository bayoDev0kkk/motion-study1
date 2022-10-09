import React from 'react';
import h from './../../assets/img/h1.png'

const Hero = () => {
    return (
        <div>
            <div id="hero" >
                <div className="container">
                    <div className="hero--general">
                        <div className="hero--general__block">
                            <div className="hero--general__block1">
                                <p>Expert instruction</p>
                                <div className="line"></div>
                            </div>
                            <h1>Invest your future.</h1>
                            <p>Achieve your  professional Goals With a Motion  Study  At the More than 30+ Universities of World</p>
                            <button>Get consultation</button>
                        </div>
                        <img src={h} alt="photo"/>
                        <div className="hero--general__square"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;