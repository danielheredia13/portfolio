import React from "react";
import { Col, Row, ListGroup } from "react-bootstrap";

const Skills = () => {
  return (
    <div className="skills-wrap">
      <h3>Skills</h3>
      <Row className="skills">
        <Col sm={4} style={{ maxWidth: "300px" }}>
          <ListGroup>
            <ListGroup.Item>
              <i class="fa-brands fa-html5" /> HTML
            </ListGroup.Item>
            <ListGroup.Item>
              <i class="fa-brands fa-css3-alt" /> CSS
            </ListGroup.Item>
            <ListGroup.Item>
              <i class="fa-brands fa-bootstrap" /> Bootstrap
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={4} style={{ maxWidth: "300px" }}>
          <ListGroup>
            <ListGroup.Item>
              <i class="fa-brands fa-js" /> JavaScript
            </ListGroup.Item>
            <ListGroup.Item>
              <i class="fa-brands fa-react" /> React / Redux
            </ListGroup.Item>
            <ListGroup.Item>
              <i class="fa-brands fa-git" /> Git
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={4} style={{ maxWidth: "300px" }}>
          <ListGroup>
            <ListGroup.Item>
              <i class="fa-brands fa-node-js" /> NodeJS
            </ListGroup.Item>
            <ListGroup.Item>
              <i class="fa-solid fa-e" /> Express
            </ListGroup.Item>
            <ListGroup.Item>
              <i class="fa-solid fa-leaf" /> MongoDB
            </ListGroup.Item>
            <ListGroup.Item>
              <i class="fa-solid fa-m" /> Mongoose
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
