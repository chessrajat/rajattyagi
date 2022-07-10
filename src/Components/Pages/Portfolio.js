import React from "react";
import { Container } from "rsuite";
import Upassword from "../Elements/Projects/Upassword";
import Wordlistcli from "../Elements/Projects/Wordlistcli";
import TopNav from "../Elements/TopNav";

const Portfolio = () => {
  return (
    <div style={{ alignContent: "center" }}>
      <Container className="main_container">
        <TopNav />
        <Container
          fluid
          style={{ alignItems: "center" }}
          className="section_style"
        >
          <Upassword />
          <Wordlistcli />
        </Container>
      </Container>
    </div>
  );
};

export default Portfolio;
