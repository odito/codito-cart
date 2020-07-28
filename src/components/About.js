import React from 'react';
import aboutImg from '../img/about.jpg';
import {Link} from 'react-router-dom';

export default function About() {
    return (
        <div className="about">
           <div className="inside-container">
              <div className="about-center">
                 <div className="about-img">
                     <img src={aboutImg} alt=""/>
                 </div>

                 <div className="about-info">
                   <p>The shoes addict,is an on line store ecommerce which provides the most famous shoes from the most well-known companies like nike, adidas, puma, new balance, lacoste,ralph -Lauren. It is the best store  which provides the best prices directly from the compnies.</p>

                   <div className="but-options">
    <Link to='/products'><button className="back-products">back to products</button></Link>
   
    </div>
                 </div>
                </div> 
            </div>  
        </div>
    )
}
