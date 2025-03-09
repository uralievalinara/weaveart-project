import React from "react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.aboutUsPage}>
      <div className={styles.aboutUsHeader}>
        <h1>About us</h1>
      </div>
      <section className={styles.aboutUsContent}>
        <h2>WHO ARE WE?</h2>
        <p>
          Our team consists of third-year students from the Innovation College at AUCA, 
          each representing their area of expertise: designers, programmers, managers, 
          environmentalists, entrepreneurs, and financiers.
        </p>

        <h2>WHY THE NAME "WEAVEART"?</h2>
        <p>
          The name WeaveArt deeply reflects the essence of our project: the word "weave" 
          symbolizes the interconnection through art. WeaveArt also emphasizes the importance 
          of art as a means of expression, which not only inspires but also helps children 
          with special needs, including autism, to showcase their uniqueness through creativity.
        </p>

        <p>
          We aim for the artwork of these talented children to be recognized and appreciated, 
          allowing people to learn about them. We want to create a communication bridge between 
          children and society through their art so that each child feels their uniqueness and 
          the significance of their contribution. Their passion for creativity deserves attention, 
          and we are confident that their work can inspire and help change the world for the better.
        </p>
      </section>
    </div>
  );
}
