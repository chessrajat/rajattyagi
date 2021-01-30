import React from "react";
import { Container } from "rsuite";
import TopNav from "../Elements/TopNav";

const Page404 = () => {
  return (
    <div style={{ alignContent: "center" }}>
      <Container className="main_container">
        <TopNav />
        <Container
          fluid
          style={{ alignItems: "center" }}
          className="section_style"
        >
          <img
            style={{ width: "95%", maxWidth: "500px" }}
            src="/img/icons/404.png"
            alt="404 page"
          />
          <h3>Page not found</h3>
        </Container>
      </Container>
    </div>
  );
};

export default Page404;
