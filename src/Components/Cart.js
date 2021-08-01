import React, {useContext, useEffect, useState} from 'react';
import {DataContext} from './Context';
import './Components.css';
import {Link} from 'react-router-dom'

const Cart = (props) => {
    const value = useContext(DataContext);
    const addCart = value.addCart;
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0)



    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.retail_price_cents*item.count);
            }, 0)
            setTotal(res);
        }
        getTotal()
    }, [cart])

    const reduction = id => {
        cart.forEach(item => {
            if (item.id == id) {
                item.count === 1 ? item.count= 1 : item.count-= 1;
            }
        })
        setCart([...cart])
    }

    const addition = id => {

        cart.forEach(item => {

            if (item.id == id) {
                return item.count+= 1;

            }
        })
        setCart([...cart])
    }

    if (cart.length === 0) {
        return <h3>The cart is empty</h3>
    }

    const  removeProduct=id=>{
        if(window.confirm("Do you want to remove this product ?")){
            cart.forEach((item, index)=>{
                if(item.id == id){
                    cart.splice(index,1)
                }
            })
            setCart([...cart]);
        }

    }


    return (
      <div>
            {cart.map(item => (
                <div className="details" key={item.id}>
                    <img src={item.main_picture_url} alt="snk"/>
                    <div className="boxd">
                        <div className="rowd">
                            <h2>{item.name}</h2>
                            <span>{item.retail_price_cents} cents</span>
                        </div>
                        <p>{item.story_html}</p>
                        <div className="amount">
                            <button className="count" onClick={() => reduction(item.id)}> -</button>
                            <span>{item.count}</span>
                            <button className="count" onClick={() => addition(item.id)}> +</button>
                            <span>  </span>
                            <button className="delete" onClick={() => removeProduct(item.id)}> Remove from cart</button>
                        </div>

                    </div>
                </div>
            ))}
            <div className="total">
                <Link to="/payment">Payment</Link>
                <span>    </span>
                <h3> Total: {total} cents</h3>
            </div>
        </div>
    );
};


export default Cart;