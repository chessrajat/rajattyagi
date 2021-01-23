import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, FlexboxGrid, Icon } from "rsuite";
import TopNav from "../Elements/TopNav";

const Blog = () => {
  const [blogs, setBlogs] = useState(null);

  const getBlogs = async () => {
    const blogs = await fetch("/data/blogs.json");
    const json_blogs = await blogs.json();
    setBlogs(json_blogs);
  };

  useEffect(() => {
    getBlogs();
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
          <FlexboxGrid style={{ maxWidth: "650px" }}>
            {blogs &&
              blogs.map((blog, i) => (
                <FlexboxGrid.Item
                  key={i}
                  className={"blog_grid"}
                  componentClass={Col}
                  colspan={24}
                  sm={11}
                >
                  <Link to={{ pathname: `/blog/${blog.name}` }}>
                    <img
                      className="image_shadow"
                      style={{ width: "100%" }}
                      src={`/img/blogs/${blog.name}.jpg`}
                      alt={`${blog.name}`}
                    />
                  </Link>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "gray",
                    }}
                  >
                    <div>
                      <Icon icon="tag" /> {blog.category}
                    </div>
                    <p>{blog.date}</p>
                  </div>
                </FlexboxGrid.Item>
              ))}
          </FlexboxGrid>
        </Container>
      </Container>
    </div>
  );
};

export default Blog;
