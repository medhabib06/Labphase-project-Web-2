import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {DataContext} from './Context'
import './Components.css'


const Products = () => {

const value=useContext(DataContext);
const [sneakers]=value.products;
const addCart=value.addCart

    return (
        <div>
            <div id="snk">
                {sneakers.map((snk)=>
                    <div className="card" key={snk.id}>
                        <Link to={`/Products/${snk.id}`}>
                            <img src={snk.grid_picture_url} alt="snk"/>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link to={`/Products/${snk.id}`}>{snk.brand_name}</Link>
                            </h3>
                            <span>{snk.retail_price_cents} cents</span>
                            <p>{snk.details}</p>
                            <button onClick={()=>addCart(snk.id)}>Add to cart</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


export default Products;