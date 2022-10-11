import React from 'react';
import a from './../../assets/img/more1.png'
import b from './../../assets/img/more2.png'
import c from './../../assets/img/more3.png'
import d from './../../assets/img/more4.png'
import e from './../../assets/img/more5.png'
import f from './../../assets/img/more6.png'
const More = () => {
    return (
        <div id="more">
            <div className="container">
                <h1>RECOMMENDED DESTINATIONS</h1>
                <div className="more-general">
                    <div className="more-general__high">
                        <div className="more-general__block">
                            <img src={a} alt=""/>
                            <div className="more-hover"><div className="more-city"><h2>Russia</h2></div></div>
                        </div>
                        <div className="more-general__block">
                            <img src={b} alt=""/>
                            <div className="more-hover"><div className="more-city"><h2>South Korea</h2></div></div>
                        </div>
                        <div className="more-general__block">
                            <img src={c} alt=""/>
                            <div className="more-hover"><div className="more-city"><h2>Turkey</h2></div></div>
                        </div>
                    </div>
                    <div className="more-general__high">
                        <div className="more-general__block">
                            <img src={d} alt=""/>
                            <div className="more-hover"><div className="more-city"><h2>London</h2></div></div>
                        </div>
                        <div className="more-general__block">
                            <img src={e} alt=""/>
                            <div className="more-hover"> <div className="more-city"><h2>Malaysia</h2></div></div>
                        </div>
                        <div className="more-general__block">
                            <img src={f} alt=""/>
                            <div className="more-hover"><div className="more-city"><h2>New York</h2></div></div>
                        </div>
                    </div>

                </div>
                <p>Top Study Opportunities Program Opportunities</p>
                <p>Popular opportunities to check out</p>
            </div>
        </div>
    );
};

export default More;