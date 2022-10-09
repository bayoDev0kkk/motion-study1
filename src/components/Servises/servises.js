import React from 'react';
import l from './../../assets/img/logo2.svg'

const Servises = () => {
    return (
        <div id="services">
            <div className="container">
                <div className="services-title">
                    <div className="services-title__block">
                        <p>Start learning today!</p>
                        <div className="line"></div>
                    </div>
                    <h2>Services</h2>
                </div>
                <div className="services--general">
                    <div className="services--general__card">
                        <div className="title">
                            <h4>IT Enabled Services</h4>
                        </div>
                        <div className="description">
                            <h5>Description:</h5>
                            <p>IT Enabled Services
                                In a modern world IT is your best friend
                                SBM Communications provides a range of IT enabled
                                Servicess to its clients that can help them optimize their
                                business operations and ensure growth and efficiency </p>
                            <div className="corner right-top-corner"></div>
                            <img className='link-icon' src={l} alt=""/>
                            <div className="corner left-bottom-corner"></div>
                            <div className="link-icon2"><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                        </div>
                    </div>
                    <div className="services--general__card card1">
                        <div className="title">
                            <h4>Consultation</h4>
                        </div>
                        <div className="description">
                            <h5>Description:</h5>
                            <p>We will advise each of our students individually, for this you need to sign up for a consultation in advance. </p>
                            <div className="corner right-top-corner"></div>
                            <img className='link-icon' src={l} alt=""/>
                            <div className="corner left-bottom-corner"></div>
                            <div className="link-icon2"><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                        </div>
                    </div>
                    <div className="services--general__card">
                        <div className="title">
                            <h4>Support</h4>
                        </div>
                        <div className="description">
                            <h5>Description:</h5>
                            <p>We provide visa support to all our clients who go to study abroad. We also provide visa support to parents of students who want to travel with their children to study or visit them while studying abroad. </p>
                            <div className="corner right-top-corner"></div>
                            <img className='link-icon' src={l} alt=""/>
                            <div className="corner left-bottom-corner"></div>
                            <div className="link-icon2"><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                        </div>
                    </div>
                    <div className="services--general__card card1">
                        <div className="title">
                            <h4>Help</h4>
                        </div>
                        <div className="description">
                            <h5>Description:</h5>
                            <p>We help students prepare for interviews and visa applications.   </p>
                            <div className="corner right-top-corner"></div>
                            <img className='link-icon' src={l} alt=""/>
                            <div className="corner left-bottom-corner"></div>
                            <div className="link-icon2"><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servises;