import React from "react";
import { Container } from "rsuite";
import TopNav from "../Elements/TopNav";

const Contact = () => {
  return (
    <div style={{ alignContent: "center" }}>
      <Container className="main_container">
        <TopNav />
        <Container
          fluid
          style={{ alignItems: "center" }}
          className="section_style"
        >
          <h3>rajattyagi.coder@gmail.com</h3>
        </Container>
      </Container>
    </div>
  );
};

export default Contact;
