import React from "react";
import { Container, Icon, Nav, Navbar } from "rsuite";
import Footer from "../Elements/Footer";
import TopNav from "../Elements/TopNav";

const Home = () => {
  return (
    <div style={styles.main_div("true")}>
      <Container className="main_container">
        <TopNav />
        {/* Name section */}
        <Container
          fluid="true"
          style={{
            overflow: "hidden",
            marginTop: "20px",
            backgroundColor: "#f7f7f9",
            borderRadius: "10px",
            alignItems: "center",
          }}
        >
          <img className="profile_pic" src="/img/my.png" alt="my profile" />
          <h2 className="name_intro">Hi, I am Rajat Tyagi</h2>
          <p className="intro_text">
            Hi, I am a developer works on multiple technologies. This portfolio
            website is the show case for my work and a blog where i write
            tutorials and my thoughts. I am here to help you solve your business
            problems and ease your business processes. I love to work in
            different technologies because they all give you a different
            perspective to solve a certain problem.<br></br>
            And I am looking for more opportunities to work on different
            projects.
          </p>
        </Container>

        {/* About me section */}

        <Container fluid="true" className="section_style">
          <Navbar>
            <Nav>
              <a
                href="https://github.com/chessrajat"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  style={{ marginLeft: "10px", marginRight: "10px" }}
                  icon="github"
                  size="2x"
                />
              </a>

              <Icon
                style={{ marginLeft: "10px", marginRight: "10px" }}
                icon="stack-overflow"
                size="2x"
              />
            </Nav>
            <Nav pullRight>
              <Icon icon="at" />
              &nbsp; rajattyagi.coder@gmail.com
            </Nav>
          </Navbar>
        </Container>

        {/* Footer section */}

        <Footer />
      </Container>
    </div>
  );
};

const styles = {
  main_div: (size) => ({
    alignContent: "center",
  }),
};

export default Home;
