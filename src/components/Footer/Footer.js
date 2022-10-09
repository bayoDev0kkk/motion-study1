import React from 'react';

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer-general">
                    <div className="line"></div>
                    <div className="footer-general__block">
                        <div className="footer-general__block1">
                            <div className="connection">
                                <a href="#"><i className="fa-solid fa-phone"></i></a>
                                <p>+996 700 232 400</p>
                            </div>
                            <div className="connection">
                                <a href="#"><i className="fa-regular fa-envelope"></i></a>
                                <p>motionweb312@gmail.com</p>
                            </div>
                            <div className="connection">
                                <a href="#"><i className="fa-solid fa-location-dot"></i></a>
                                <p>г.Бишкек ул. Турусбекова 109/3</p>
                            </div>
                        </div>
                        <div className="footer-general__block2">
                            <a href="#">О компании</a>
                            <a href="#">Сотрудничества</a>
                            <a href="#">Вакансии</a>
                        </div>
                        <div className="footer-general__block2">
                            <a href="#">Наши проекты</a>
                            <a href="#">Motion Web IT STUDIO</a>
                            <a href="#">Motion Web IT CLUB</a>
                        </div>
                        <div className="footer-icons">
                            <a href="#"><i className='fab fa-instagram'></i></a>
                            <a href="#"><i className='fab fa-telegram'></i></a>
                            <a href="#"><i className='fab fa-youtube'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;