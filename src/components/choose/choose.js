import React from 'react';
import c from './../../assets/img/ww.svg'
import c1 from './../../assets/img/c1.svg'
import c2 from './../../assets/img/c2.svg'
import c3 from './../../assets/img/c3.svg'
import why from './../../assets/img/why.png'

const Choose = () => {
    return (
       <div id="choose">
           <div className="container">
               <div className="choose-title">
                   <div className="line"></div>
                   <h2>WHY CHOOSE US</h2>
                   <div className="line"></div>
               </div>
               <div className="choose--general">
                   <div className="choose--general__block">
                       <div className="choose--general__dis dis1">
                           <img src={c} alt="why we"/>
                           <p>5 years  of experience in the market</p>
                       </div>
                       <div className="choose--general__dis dis2">
                           <img src={c1} alt="why we"/>
                           <p>3000+ students</p>
                       </div>
                       <div className="choose--general__dis dis1">
                           <img src={c2} alt="why we"/>
                           <p>visa support and paperwork</p>
                       </div>
                       <div className="choose--general__dis dis2">
                           <img src={c3} alt="why we"/>
                           <p>Universites in over 100+countries</p>
                       </div>
                   </div>
                   <img src={why} alt="choose us" className='why-us'/>
               </div>
           </div>
       </div>
    );
};

export default Choose;