import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
//import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="secondary" variant="dark" style={{ height: 55 }}>
      <Container>
        <Navbar.Brand>
          <a href="/">
            <AiOutlineShoppingCart /> E-Shopify
          </a>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
