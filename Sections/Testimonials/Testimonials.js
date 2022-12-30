import React from "react";
import { Container } from "react-bootstrap";
import SectionHeading from "../../components/SectionHeading";

function Testimonials() {
  return (
    <>
      <Container>
        <div className="section_start">
          <SectionHeading heading={"Testimonials"} subheading={"Client"} />
        </div>
      </Container>
    </>
  );
}

export default Testimonials;
