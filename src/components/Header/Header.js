import React from 'react';
import l from './../../assets/img/logo.svg'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <nav className="navbar--general">
                    <div className="navbar--general__logo">
                        <img src={l} alt="Logo"/>
                    </div>
                    <ul className= "navbar--general__block">
                        <NavLink to="/hero" className="list">Home</NavLink>
                        <a href="/about-page" className="list">About</a>
                        <a href='#' className='list'>Services</a>
                        <select name="" id="select-list">
                            <option value="l1">List country</option>
                            <option value="l2">List colleges</option>
                            <option value="l3">List university</option>
                        </select>
                        <a href='#' className='list'>Advantage</a>
                        <a href='#' className='list'>Gallery</a>
                        <a href='#' className='list'>Feedback</a>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;