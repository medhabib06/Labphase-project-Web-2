import React from 'react';
import Products from "./Products";
import Details from "./Details";
import Cart from './Cart';
import {Route} from "react-router-dom";


const Body = () => {
    return (
        <div>
             <Route exact={true} path="/Products" component={Products}  />
             <Route path="/Products/:id" component={Details}/>
             <Route path="/Cart" component={Cart}/>
        </div>
    );
};

export default Body;