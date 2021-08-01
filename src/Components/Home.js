import React from 'react';
import SNK from "../SNK.jpg"
import './Components.css';

const Home = () => {
    return (
        <div>
            <img className="homeImg" src={SNK}/>
        </div>
    );
};

export default Home;