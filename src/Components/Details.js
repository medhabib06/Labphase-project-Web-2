import React, {useContext, useEffect, useState} from 'react';
import {DataContext} from './Context';
import './Components.css';
import {Link} from 'react-router-dom'

const Details = (props) => {
    const value=useContext(DataContext);
    const [sneakers]=value.products;
    const addCart=value.addCart;

    const getProduct = () => {

        if (props.match.params.id) {
            const data = sneakers.filter(item => {
                return (item.id) == (props.match.params.id);
            });
            return data
        }
    };

    const sd = getProduct();

    const clean =(str)=>{
        if (str) {
            let cstr, cstr1;
            cstr = str.replace("<p>", "");
            cstr1= cstr.replace("</p>", "");
            return cstr1;
        }

    }

    return (
        <div>
            {sd.map(item => (
                <div className="details" key={item.id}>
                    <img src={item.main_picture_url} alt="snk"/>
                    <div className="boxd">
                        <div className="rowd">
                            <h2>{item.name}</h2>
                            <span>{item.retail_price_cents} cents</span>
                        </div>
                        <p>{clean(item.story_html)}</p>

                        <Link to="/cart" className='cartd' onClick={()=>addCart(item.id)}>
                            Add to cart
                        </Link>

                    </div>
                </div>
            ))}
        </div>
    );
};


export default Details;