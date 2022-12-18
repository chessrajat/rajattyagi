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
          <h4>rajattyagi.coder@gmail.com</h4>
          <h4>rajat498tyagi@gmail.com</h4>
        </Container>
      </Container>
    </div>
  );
};

export default Contact;
