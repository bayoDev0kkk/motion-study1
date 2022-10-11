import React from 'react';
import {NavLink} from "react-router-dom";
import a from './../../assets/img/about.png'


const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="about--general__title">
                    <div className="line"></div>
                    <h2>ABOUT US</h2>
                    <div className="line"></div>
                </div>
                <div className="about--general">
                    <img src={a} alt=""/>
                    <div className="about--general__block">
                        <h4>Why are we ?</h4>
                           <p>Motion Web IT academy is an international educational
                            project that trains IT practitioners.
                            We have been in the IT education market for more
                            than one year.All this time, we have been studying
                            together with our students: we have improved the
                            process of classes, launched new directions
                            and courses, and raised the level of employees.</p>
                        <div className="about--general__about">
                            <div className="about--general__dis">
                                <h4>Students </h4>
                                <h4>1000+ </h4>
                            </div>
                            <div className="about--general__dis">
                                <h4>Countries </h4>
                                <h4>6+</h4>
                            </div>
                            <div className="about--general__dis">
                                <h4>Universities</h4>
                                <h4>30+</h4>
                            </div>
                        </div>
                        <div className="btn">
                            <NavLink to="/more" className="button">To learn more</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;