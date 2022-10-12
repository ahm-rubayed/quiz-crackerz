import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div className="container mx-auto position-absolute top-50 start-50 translate-middle">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is the purpose of react?</Accordion.Header>
          <Accordion.Body>
            React is a JavaScript library developed by Facebook which, among
            other things, was used to build Instagram.com. Its aim is to allow
            developers to easily create fast user interfaces for websites and
            applications alike. The main concept of React. js is virtual DOM
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How does context api works?</Accordion.Header>
          <Accordion.Body>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Defination of use ref?</Accordion.Header>
          <Accordion.Body>
            Refs provide a way to access DOM nodes or React elements created in
            the render method. In the typical React dataflow, props are the only
            way that parent components interact with their children. To modify a
            child, you re-render it with new props.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
