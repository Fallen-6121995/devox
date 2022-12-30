import React from "react";
import styles from "./card.module.css";

function Card({ bgNumber, title, desc, id }) {
  console.log(id);
  return (
    <>
      <div key={id} className={styles.benefits__card}>
        <span className={`${styles.benefits__cardNumber} num__${id}`}>
          {bgNumber}
        </span>
        <div className={styles.benefits__block}>
          <h3 className={`${styles.benefits__cardTitle}`}>{title}</h3>
          <p className={styles.benefits__cardDesc}>{desc}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
