import React from "react";
import { Container } from "react-bootstrap";
import SectionHeading from "../../components/SectionHeading";

function Technologies() {
  return (
    <>
      <Container>
        <div className="section_start">
          <SectionHeading heading={"Technologies"} subheading={"We Use"} />
        </div>
      </Container>
    </>
  );
}

export default Technologies;
