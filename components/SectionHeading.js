import React from "react";

function SectionHeading({ heading, subheading }) {
  return (
    <>
      <h2 className="title__wrap">
        <span className="heading">{heading}</span>
        <span className="subheading">{subheading}</span>
      </h2>
      <style jsx>{`
        .title__wrap {
          font-weight: 600;
          line-height: 1.2;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding-bottom: 70px;
        }
        .heading {
          font-size: 45px;
          color: #515c6a;
          line-height: 1.3;
          font-family: "Poppins", sans-serif;
          font-weight: bold;
          text-transform: capitalize;
        }
        .subheading {
          font-size: 50px;
          color: #140d26;
          line-height: 1.1;
          padding-bottom: 0;
          font-family: "Poppins", sans-serif;
          font-weight: bold;
          text-transform: capitalize;
        }
      `}</style>
    </>
  );
}

export default SectionHeading;
