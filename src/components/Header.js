import React from "react";
import {
  Container,
  FormControl,
  Navbar,
  Nav,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbShoppingCartPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="secondary" variant="dark" style={{ height: 55 }}>
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <AiOutlineShoppingCart style={{ marginRight: 8, fontSize: 30 }} />
            ShopWave
          </Link>
        </Navbar.Brand>

        <Navbar.Text>
          <FormControl style={{ width: 400 }} placeholder="Product ideas?" />
        </Navbar.Text>

        <Nav>
          <Dropdown align="end">
            <Dropdown.Toggle variant="light">
              <TbShoppingCartPlus color="grey" style={{ fontSize: "29px" }} />
              <Badge
                bg="none"
                style={{
                  color: "grey",
                  fontSize: 14,
                  padding: 4,
                }}
              >
                {10}
              </Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}> Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
