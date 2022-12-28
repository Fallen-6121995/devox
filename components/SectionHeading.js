import React from "react";

function SectionHeading({ heading, subheading }) {
  return (
    <>
      <h2 className={styles.title__wrap}>
        <span className={styles.subheading}>React JS Development Services</span>
        <span className={styles.heading}>We Provide</span>
      </h2>
    </>
  );
}

export default SectionHeading;
