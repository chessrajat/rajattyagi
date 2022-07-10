import React from "react";
import { Button, Col, FlexboxGrid, Icon } from "rsuite";

const Wordlistcli = () => {
  return (
    <>
      <FlexboxGrid justify="space-between" style={{ maxWidth: "650px" }}>
        <FlexboxGrid.Item componentClass={Col} colspan={24} sm={11}>
          <img
            className="image_shadow"
            style={{ width: "100%" }}
            src="/img/projects/wordlistcli.jpg"
            alt="wordlistcli"
          />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          className="project_brief"
          componentClass={Col}
          colspan={24}
          sm={12}
        >
          <p>
            Wordlistcli is the tool to search and download the various category
            to wordlists to crack hashes, FUZZ subdomains, web directories.
            Easily search and download it from online archives to use for
            cracking.
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
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
};

export default Wordlistcli;
