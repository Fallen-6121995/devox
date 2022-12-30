import React from "react";
import { Container } from "react-bootstrap";
import SectionHeading from "../../components/SectionHeading";

function CaseStudy() {
  return (
    <>
      <Container>
        <div className="section_start">
          <SectionHeading heading={"Our"} subheading={"Case Studies"} />
        </div>
      </Container>
    </>
  );
}

export default CaseStudy;
