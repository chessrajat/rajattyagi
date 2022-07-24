import React from "react";
import { Button, Col, FlexboxGrid, Icon } from "rsuite";

const Typingtest = () => {
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
            src="/img/projects/typingtest.jpg"
            alt="typing test"
          />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          className="project_brief"
          componentClass={Col}
          colspan={24}
          sm={12}
        >
          <p>
            A Typing test application build in React js and React suite. This
            allows you to store the number of tests and the you average test
            speed locally to track your progress.
          </p>
          <a
            href="https://github.com/chessrajat/wordlistcli"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="light_button">
              <Icon icon="github" size="lg" />
              &nbsp;View
            </Button>
          </a>
          <a
            href="https://typing.rajattyagi.in/"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "10px" }}
          >
            <Button className="light_button">
              <Icon icon="send" size="md" />
              &nbsp;Visit
            </Button>
          </a>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
};

export default Typingtest;
