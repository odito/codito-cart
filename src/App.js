import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'; 
import Navbar from "./components/Navbar.js";
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Cart from './components/Cart';
import Details from './components/Details';
import Payment from './components/Payment';



function App() {
  return (
<React.Fragment>
  <Navbar />
  
 <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/about" component={About} />
  <Route exact path="/products" component={Products} />
  <Route exact path="/payment" component={Payment} />
  <Route exact path="/details/:id" component={Details} />
  
 </Switch>
 {/* <Route exact path="/cart" component={Cart} /> */}

  

 
  
  

   
 
</React.Fragment>
  );
}

export default App;
