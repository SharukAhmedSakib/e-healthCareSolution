import React from "react";
import { Container, Row } from "react-bootstrap";
import useBlogs from "../../../hooks/useBlogs";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const { blogs } = useBlogs();
  return (
    <div>
      <Container>
        <h1 style={{ color: "greenyellow", padding: "2%" }}>Latest Blogs</h1>
        {blogs.map((blog) => (
          <Row className="my-3">
            <Blog key={blog.key} blog={blog}></Blog>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Blogs;
