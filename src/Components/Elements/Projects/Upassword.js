import React from "react";
import { Button, Col, FlexboxGrid, Icon } from "rsuite";

const Upassword = () => {
  return (
    <>
      <FlexboxGrid
        justify="space-between"
        style={{ maxWidth: "650px", marginBottom: "30px" }}
      >
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
            Upassword is a Rest API build in python-flask with flask-restful.
            with database as mongodb and docker for container. some features are
            authentication, generate password, save passwords.
          </p>
          <a
            href="https://github.com/chessrajat/upasswords_flask"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="light_button">
              <Icon icon="github" size="lg" />
              &nbsp;View
            </Button>
          </a>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
};

export default Upassword;
