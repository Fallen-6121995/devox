import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../../components/Card/Card";
import SectionHeading from "../../components/SectionHeading";
import styles from "./benefits.module.css";

const data = [
  {
    id: 1,
    bgNumber: "01",
    title: "Agile approach",
    desc: "Remain flexible through the whole development cycle. Scale your team up and down or augment it with part-time specialists when needed.",
  },
  {
    id: 2,
    bgNumber: "02",
    title: "Dedicated ReactJS Developers",
    desc: "Assign a full-time ReactJS team for enhanced collaboration and faster results. We can cherry-pick the developers or provide you with a ready-to-go team.",
  },
  {
    id: 3,
    bgNumber: "03",
    title: "Supreme Security",
    desc: "We embrace React to build enterprise-grade apps and user-facing web solutions with the highest level of security.",
  },
  {
    id: 4,
    bgNumber: "04",
    title: "Integrity and Transparency",
    desc: "We encourage our clients to take part in the development process. We update you on every project detail and maintain visibility throughout development.",
  },
];

function Benefits() {
  return (
    <>
      <Container>
        <div className="section_start">
          <SectionHeading
            heading={"Benefits Of Our"}
            subheading={"React JS Development Services"}
          />

          <Row>
            {data?.map((card) => (
              <Col key={card.id} lg={6}>
                <Card
                  id={card.id}
                  title={card?.title}
                  bgNumber={card?.bgNumber}
                  desc={card?.desc}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Benefits;
