import React, { Component } from 'react'
import {Data} from './Data';

const ProductContext = React.createContext();



 class ProductProvider extends Component {

state={
  navOpen:false,
  cartOpen:true,
  data:Data,
  cart:[],
  total:0,
  shipping:10
 

}


// for open-close navbar
handleNav=()=>{

    if(this.state.cartOpen===true){
        this.setState({
           cartOpen:false
        })
     }

    this.setState({
        navOpen:!this.state.navOpen
    })
}

// for open-close cart
handleCartNav=()=>{
    
    if(this.state.navOpen===true){
        this.setState({
            navOpen:false
        })
     }
     

    this.setState({
        cartOpen:!this.state.cartOpen
    })
}

// if cart or navbar is open we want to be closed if pushing something else
closeNavCart=()=>{
  if(this.state.cartOpen==true || this.state.navOpen===true){
    this.setState({
        navOpen:false,
        cartOpen:false
    })
  }
 
}

addToCart=(id)=>{
    

  
    // const {data,cart}=this.state;
    

//     let check = cart.every(item=>{
//         return item.id !==id
//     })
          
//  if(check){
//     const filterData=data.filter(item=>{
//         return item.id===id
//     });


//     this.setState({
//         cart:[...this.state.cart, ...filterData],
//         cartOpen:true,
       
        
       
//     },()=>{
//         this.totalItems();
//     })

//  }

//  else{
//     //  alert('already exists')
//     cart.forEach(item=>{
        
//     })
//      this.setState({
         
//       isInCart:true
       
//      })
//  }





// .........second way...........
    console.log(`item ${id} added to cart`);
    const {data,cart}=this.state;
    

  let check= this.state.cart.find(item=>item.id===id);
   
  
  



    if(!check){

    
        const filterData=data.filter(item=>{
            return (item.id===id)
        });

        // for each in order to cange the situation of cart

     filterData.forEach(item=>{
         item.isInCart=true
     })

        this.setState({
            cart:[...this.state.cart, ...filterData],
            cartOpen:true,
          
            
        },()=>{
            this.totalItems();
        })
    }

    else{
        // alert('item exists')
      
        this.setState({
          
        })
    
    }


}

// delet single item from cart
deleteItem=(id)=>{

const {cart}=this.state;

// let filterDel = cart.filter(item=>{
//     return item.id !==id;
// })
// this.setState({
//     cart:filterDel
// },()=>{
//     this.totalItems();
// })



// ......second way......

cart.forEach((item, index)=>{
    if(item.id===id){
        cart.splice(index,1)
    }
    item.isInCart=false
})

this.setState({
    cart:cart,
  
},()=>{
    this.totalItems();
})


}


// increase item
increaseItem=(id)=>{
 const {cart}=this.state;
 cart.forEach(item=>{
     if(item.id===id){
      item.count +=1;
     }
 })

 this.setState({
     cart:cart
 },()=>{
     this.totalItems();
 })

}


// decrease item
decreaseItem=(id)=>{
    const {cart}=this.state;
 
    cart.forEach(item=>{
        if(item.id===id){
          item.count===1?item.count=1:item.count -=1;
        }
    })

    this.setState({
        cart:cart
    },()=>{
        this.totalItems();
    })
   
   }

// get total items in cart
totalItems=()=>{
 const {cart}=this.state;
 const cartTotal=cart.reduce((prev, item)=>{
     return prev + (item.price*item.count)
 },0)

this.setState({
    total:cartTotal
})

}


componentDidUpdate(){
    localStorage.setItem('dataCart', JSON.stringify(this.state.cart));
    localStorage.setItem('totalCart', JSON.stringify(this.state.total));

    // localStorage.setItem('dat', JSON.stringify(this.state.data));

   
}

componentDidMount(){
    this.totalItems();

// const dat = JSON.parse(localStorage.getItem('dat'));
// if(dat !==null){
//   this.setState({
//       data:dat
//   })
// }
   
    
  const dataCart=JSON.parse(localStorage.getItem('dataCart'));


  if(dataCart !==null){
    
    this.setState({
     cart:dataCart,
     
    })
  }

  const totalCart =JSON.parse(localStorage.getItem('totalCart'));

  this.setState({
      total:totalCart
  })

 
}


























    render() {
        return (
            <ProductContext.Provider value={{

             ...this.state,
             handleNav:this.handleNav,
             handleCartNav:this.handleCartNav,
             closeNavCart:this.closeNavCart,
             addToCart:this.addToCart,
             deleteItem:this.deleteItem,
             increaseItem:this.increaseItem,
             decreaseItem:this.decreaseItem

            }}>
               {this.props.children} 
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;


export {ProductConsumer, ProductProvider}
