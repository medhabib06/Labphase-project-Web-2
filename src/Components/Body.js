import React from 'react';
import Products from "./Products";
import Details from "./Details";
import Cart from './Cart';
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Home from "./Home";
import {Route} from "react-router-dom";



const Body = () => {
    return (
        <div>
            <Route path="/Home" component={Home}/>
            <Route exact={true} path="/Products" component={Products}/>
            <Route path="/Products/:id" component={Details}/>
            <Route path="/About.us" component={AboutUs}/>
            <Route path="/Contact.us" component={ContactUs}/>
            <Route path="/Cart" component={Cart}/>
        </div>
    );
};

export default Body;