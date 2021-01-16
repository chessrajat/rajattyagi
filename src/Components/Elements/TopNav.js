import React from "react";
import { Link } from "react-router-dom";
import { Icon, Nav, Navbar } from "rsuite";

const TopNav = () => {
  return (
    <div>
      <NavBarInstance />
    </div>
  );
};

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
  return (
    <Navbar {...props} style={{ borderRadius: "10px" }}>
      <Link to="/">
        <Navbar.Header
          style={{
            backgroundImage: "linear-gradient(#6e42cd, #c86883)",
            borderRadius: "10px",
            paddingLeft: "15px",
            paddingRight: "18px",
            paddingTop: "18px",
          }}
        >
          <Icon
            icon="home"
            size="lg"
            style={{
              color: "#f7f7f9",
              alignItems: "center",
              paddingLeft: "5px",
            }}
          />
        </Navbar.Header>
      </Link>

      <Navbar.Body>
        <Nav>
          <Link to="/resume">
            <Nav.Item>Resume</Nav.Item>
          </Link>
          <Link to="/portfolio">
            <Nav.Item>Portfolio</Nav.Item>
          </Link>
        </Nav>
        <Nav pullRight>
          <Link to="/contact">
            <Nav.Item>Contact</Nav.Item>
          </Link>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default TopNav;
