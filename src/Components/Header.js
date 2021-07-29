import React, {useContext} from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Components.css'
import CartIcon from '../shopping-cart-solid.svg'
import {DataContext} from "./Context";

const Header = () => {
    const value=useContext(DataContext);
    const [cart]=value.cart;

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand><Link to="/Home" className="Brand">SNEAKERS</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link> <Link to="/Products" className="nav-link">Products</Link></Nav.Link>
                        <Nav.Link><Link to="/Contact" className="nav-link">Contact</Link></Nav.Link>
                        <Nav.Link><Link to="/About.us" className="nav-link">About us</Link></Nav.Link>

                    </Nav>
                    <Nav>
                        <span>{cart.length}   </span>
                        <Link to="/Cart"><img src={CartIcon} alt='Cart' className="cart"/></Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;