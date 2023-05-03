import React from "react";
import { Card, Col, Row, ListGroup } from "react-bootstrap";
import chocolates from "../images/chocolates.jpg";
import movies from "../images/movies.jpg";

const Projects = () => {
  const Technologies1 = [
    "JSX",
    "CSS",
    "Bootstrap",
    "React-Bootstrap",
    "JavaScript",
    "React",
    "Axios",
    "Redux",
    "React-Router-Dom",
    "Node",
    "Express",
    "MongoDB",
    "Mongoose",
    "Jsonwebtoken",
    "Bcryptjs",
    "PayPal API",
    "Dotenv",
    "Multer",
  ];

  const Technologies2 = [
    "JSX",
    "CSS",
    "JavaScript",
    "React",
    "Axios",
    "Redux",
    "React-Router-Dom",
    "Node",
    "Express",
    "MongoDB",
    "Mongoose",
    "Jsonwebtoken",
    "Bcryptjs",
    "Dotenv",
  ];

  return (
    <div id="projects">
      <h3>Projects</h3>
      <Card className="project">
        <Row>
          <Col lg={4} className="d-flex flex-wrap align-items-center">
            <Card.Img src={chocolates} fluid="true" />
          </Col>
          <Col lg={4}>
            <Card.Body className="project-body">
              <Card.Title>Full-Stack MERN Ecommerce</Card.Title>
              <Card.Text className="project-text">
                A full-stack React and Node application that allows users to
                register and login to their accounts, add items to their cart,
                update items in the card, and checkout securely with PayPal. As
                an admin user you are able to add, update and delete products
                and also manage users and orders.
              </Card.Text>
              <Card.Link
                className="link"
                href="https://github.com/danielheredia13/ChocolateShop"
                target="_blank"
              >
                Code
              </Card.Link>
              <Card.Link
                className="link"
                href="https://chocolateshop-api.onrender.com/"
                target="_blank"
              >
                Live Demo
              </Card.Link>
            </Card.Body>
          </Col>
          <Col lg={4}>
            <Card.Body className="project-body">
              <Card.Title>Technologies used:</Card.Title>
              <div>
                {Technologies1.map((t, i) => (
                  <p className="tech" key={i}>
                    {t}
                  </p>
                ))}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="project">
        <Row>
          <Col lg={4} className="d-flex flex-wrap align-items-center">
            <Card.Img src={movies} fluid="true" />
          </Col>
          <Col lg={4}>
            <Card.Body className="project-body" lg={4}>
              <Card.Title>Full-Stack MERN Movie Finder</Card.Title>
              <Card.Text className="project-text">
                A full-stack React and Node application that allows users to
                register and login to their accounts, search for movies, add
                them to favorite, visualize the favorite movies and have
                recommended movies based on their favorites.
              </Card.Text>
              <Card.Link
                className="link"
                href="https://github.com/danielheredia13/DHMovies"
                target="_blank"
              >
                Code
              </Card.Link>
              <Card.Link
                className="link"
                href="https://dhmovies.onrender.com/"
                target="_blank"
              >
                Live Demo
              </Card.Link>
            </Card.Body>
          </Col>

          <Col lg={4}>
            <Card.Body className="project-body">
              <Card.Title>Technologies used:</Card.Title>
              <div>
                {Technologies2.map((t, i) => (
                  <p className="tech" key={i}>
                    {t}
                  </p>
                ))}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Projects;
