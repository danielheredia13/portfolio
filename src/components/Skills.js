import React from "react";
import { Col, Row, ListGroup } from "react-bootstrap";

const Skills = () => {
  return (
    <div>
      <h3>Skills</h3>
      <Row className="skills">
        <Col sm={4} style={{ maxWidth: "300px" }}>
          <ListGroup>
            <ListGroup.Item>HTML</ListGroup.Item>
            <ListGroup.Item>CSS</ListGroup.Item>
            <ListGroup.Item>Bootstrap</ListGroup.Item>
            <ListGroup.Item>JavaScript</ListGroup.Item>
            <ListGroup.Item>React</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={4} style={{ maxWidth: "300px" }}>
          <ListGroup>
            <ListGroup.Item>Redux</ListGroup.Item>
            <ListGroup.Item>Axios</ListGroup.Item>
            <ListGroup.Item>React Router DOM</ListGroup.Item>
            <ListGroup.Item>Git</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={4} style={{ maxWidth: "300px" }}>
          <ListGroup>
            <ListGroup.Item>NodeJS</ListGroup.Item>
            <ListGroup.Item>Express</ListGroup.Item>
            <ListGroup.Item>MongoDB</ListGroup.Item>
            <ListGroup.Item>Mongoose</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
