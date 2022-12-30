import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "../../components/SectionHeading";
import styles from "./weProvide.module.css";

const data = [
  {
    id: 1,
    title: "React.js Development From Scratch",
    desc: "Leverage our React software development services to build a project from start to go. Share your project requirements for the perfect mix of talent and expertise.",
  },
  {
    id: 2,
    title: "Migration to React",
    desc: "Our React development company assists businesses in adopting React functionality, wrapping the code of your existing architecture into React components. Update your application while eliminating challenges and issues.",
  },
  {
    id: 3,
    title: "Dedicated React.js Development Team",
    desc: "Build high-performing web applications with our dedicated team of React.js developers. We fit your needs at scale while providing React development services and custom teams.",
  },
  {
    id: 4,
    title: "React Native App Development",
    desc: "We help you achieve cross-platform compatibility and a faster development cycle with the full power of React Native. Develop a cross-platform and multi-dimensional mobile app with interactive interfaces and reduced code complexity.",
  },
  {
    id: 5,
    title: "ReactJS UI/UX Development",
    desc: "Build interactive UIs and impressive web applications that attract users. Our team of UI/UX designers delivers highly-engaging interface development using the latest features of ReactJS.",
  },
  {
    id: 6,
    title: "ReactJS Maintenance and Support",
    desc: "The Devox Software team renders maintenance and support services for consistent and stable performance of applications. We can also update your app functionality on demand.",
  },
];
function WeProvide() {
  return (
    <>
      <Container>
        <div className="section_start">
          <SectionHeading
            heading={"React JS Development Services"}
            subheading={"We Provide"}
          />
          <Row>
            {data.map((item) => (
              <Col sm={6} md={6} lg={6}>
                <div className={styles.weProvide__reasons} key={item?.id}>
                  <h3 className={`title__collection title${item?.id}`}>
                    {item?.title}
                  </h3>
                  <p className={styles.description}>{item?.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default WeProvide;
