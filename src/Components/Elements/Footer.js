import React from "react";
import { Container, Nav, Navbar } from "rsuite";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <Container
      fluid
      style={{
        overflow: "hidden",
        marginTop: "20px",
        backgroundColor: "#030852",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <Navbar style={{ backgroundColor: "#030852", color: "#f7f7f9" }}>
        <Nav>Rajat Tyagi</Nav>
        <Nav pullRight>&copy;2020-{year}. All rights reserved.</Nav>
      </Navbar>
    </Container>
  );
};

export default Footer;