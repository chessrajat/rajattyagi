import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, FlexboxGrid, Icon } from "rsuite";
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
          <FlexboxGrid justify="space-between" style={{ maxWidth: "650px" }}>
            <FlexboxGrid.Item componentClass={Col} colspan={24} sm={11}>
              <img
                className="image_shadow"
                style={{ width: "100%" }}
                src="/img/projects/upasswords.jpg"
                alt="upasswords api"
              />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item
              className="project_brief"
              componentClass={Col}
              colspan={24}
              sm={12}
            >
              <p>
                Upassword is a Rest API build in python-flask with
                flask-restful. with database as mongodb and docker for
                container. some features are authentication, generate password,
                save passwords.
              </p>
              <Link
                to={{
                  pathname: "https://github.com/chessrajat/upasswords_flask",
                }}
                target="_blank"
              >
                <Button className="light_button">
                  <Icon icon="github" size="lg" />
                  &nbsp;View
                </Button>
              </Link>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Container>
      </Container>
    </div>
  );
};

export default Portfolio;
