import React, {props, useEffect, useState} from 'react';
import axios from "axios";

export const DataContext=React.createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios

            .get('https://raw.githubusercontent.com/Stupidism/goat-sneakers/master/api.json')
            .then((res) => {
                setProducts(res.data.sneakers);
            })
            .catch(function (error) {
                console.log(error);
            })


    },[]);


    const [cart, setCart]=useState([]);

    const addCart=(id)=>{
        const check=cart.every(item=>{
            return item.id !=id
        })
        if (check){
             const data=products.filter(product=>{
                 return product.id==id
             })
            setCart([...cart, ...data])
        }
        else {
            alert("This item is already in the cart.")
        }
    }


    const value={
        products:[products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    return (
      <DataContext.Provider value={value}>
          {props.children}
      </DataContext.Provider>
    );
};

