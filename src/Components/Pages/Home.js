import React from "react";
import { Avatar, Container, Icon, Nav, Navbar } from "rsuite";
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
            I am software engineer & Cyber Security enthusiast with a passion
            for challenges and new idea. I am a professional developer and a
            problem solver with a proven track record of delivering high
            quality, technically sound work. I have been working with continuous
            learning, utilizing advanced technologies and services from day one
            of my career. My Primary interest include Automation, Penetration
            Testing and application design and development. I love to work on
            multiple technologies because it provide different perspective to
            solve problems. Specialized in python programming Language.
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
              <a
                href="https://stackoverflow.com/users/9573338/rajat-tyagi"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  style={{ marginLeft: "10px", marginRight: "10px" }}
                  icon="stack-overflow"
                  size="2x"
                />
              </a>
              <a
                style={{
                  marginTop: "30px",
                }}
                href="https://tryhackme.com/p/Drag0"
                target="_blank"
                rel="noreferrer"
              >
                <Avatar
                  style={{
                    position: "relative",
                    top: "8px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    backgroundColor: "#f7f7f9",
                  }}
                  circle
                  size="sm"
                  src="/img/icons/thm.png"
                />
              </a>
            </Nav>
            <Nav pullRight style={{ marginTop: "5px" }}>
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
