import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "rsuite";
import TopNav from "../Elements/TopNav";

const BlogPage = () => {
  const [content, setContent] = useState(null);

  const params = useParams();
  const blog_path = `/blogs/${params.blogname}.html`;

  const getBlogContent = () => {
    fetch(blog_path)
      .then(async (data) => {
        const text = await data.text();
        setContent(text);
      })
      .catch((err) => {
        console.log(err);
        console.log("File don't exists");
      });
  };

  useEffect(() => {
    getBlogContent();
  }, []);

  return (
    <div style={{ alignContent: "center" }}>
      <Container className="main_container">
        <TopNav />
        <Container
          fluid
          style={{ alignItems: "center" }}
          className="section_style"
        >
          {content && (
            <span
              style={{ width: "100%" }}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </Container>
      </Container>
    </div>
  );
};

export default BlogPage;
