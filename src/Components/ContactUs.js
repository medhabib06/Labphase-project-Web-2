import React from 'react';
import './Components.css';

const ContactUs = () => {
    return (
        <div className="ContactUs">
            <div className="C1">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.159010287235!2d10.237091715633884!3d36.83866767323236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3540ccc77b1f%3A0x5df9d6c316370680!2sLac%20Palace!5e0!3m2!1sfr!2stn!4v1627822616129!5m2!1sfr!2stn"
                    width="700" height="500" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className="C1 Contacts" >
                <h3>email: medhabib06@gmail.com
                    <br/>
                    <br/>
                    <br/>
                Tel: +216 24446390</h3>
            </div>
        </div>
    );
};

export default ContactUs;