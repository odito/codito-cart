import React, { Component } from 'react';
import Product from './Product';
import {ProductConsumer} from './Context';


export default class Products extends Component {
render() {
return (
<ProductConsumer>
{value=>{
    const {data, addToCart,closeNavCart}=value;
   
  
    return(
    <div className="products">
    
      <h2>Products</h2>
    
      <div className="products-center">
        {data.map((product)=>{

            return  <Product key={product.id} product={product} addToCart={()=>addToCart(product.id)} closeNavCart={closeNavCart}  />

        })}  
      </div> 
   
    </div>
    )
}}
</ProductConsumer>
)
}
}
