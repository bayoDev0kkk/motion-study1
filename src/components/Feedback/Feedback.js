import React from 'react';
import l from './../../assets/img/f1.svg'
import l2 from './../../assets/img/f2.svg'
import l3 from './../../assets/img/f3.svg'
import ll1 from './../../assets/img/ff1.png'

const Feedback = () => {
    return (
        <div id="feedback">
            <div className="container">
                <h2 className="feed">Feedback of our clients</h2>
                <div className="feedback-general">
                    <div className="feedback-general__block">
                        <img className="feed-logo feed1" src={l2} alt="logo"/>
                        <div className="back-img">
                            <div className="back-img-dis">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate  libero et velit interdum, ac aliquet odio mattis.</p>
                                <div className="feedback-time">
                                    <p>12/05/2022</p>
                                    <p>13:33</p>
                                </div>
                            </div>
                            <img className='feed-img' src={ll1} alt="background"/>
                        </div>
                    </div>
                    <div className="feedback-general__block">
                        <img className="feed-logo" src={l} alt="logo"/>
                        <div className="back-img">
                            <div className="back-img-dis">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate  libero et velit interdum, ac aliquet odio mattis.</p>
                                <div className="feedback-time">
                                    <p>12/05/2022</p>
                                    <p>13:33</p>
                                </div>
                            </div>
                            <img className='feed-img' src={ll1} alt="background"/>
                        </div>
                    </div>
                    <div className="feedback-general__block">
                        <img className="feed-logo feed1" src={l3} alt="logo"/>
                        <div className="back-img">
                            <div className="back-img-dis">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate  libero et velit interdum, ac aliquet odio mattis.</p>
                                <div className="feedback-time">
                                    <p>12/05/2022</p>
                                    <p>13:33</p>
                                </div>
                            </div>
                            <img className='feed-img' src={ll1} alt="background"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;