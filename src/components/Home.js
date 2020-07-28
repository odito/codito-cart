import React from 'react';
import backImg from '../img/shoes2.jpg'
import Products from '../components/Products';

export default function Home(props) {
  
    return (
       <React.Fragment>
            <div className='header'>
           {/* <img src={backImg} alt=""/> */}
           <div className="header-info">
               <h1><span className="header-shoes"> shoes </span>addict</h1>
               <p>Best shoes are here for all of you</p>
               
           </div>
        </div>

        <div className="products-home">
            <Products />
        </div>
       </React.Fragment>
    )
}
