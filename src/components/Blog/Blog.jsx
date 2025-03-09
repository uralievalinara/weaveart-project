import React from "react";
import styles from "./Blog.module.css";

export default function Blog() {
  return (
    <div className={styles.blogPage}>
      <div className={styles.blogHeader}>
        <h1>Blog</h1>
      </div>
      <section className={styles.blogContent}>
        <p>Welcome to the "Blogs" Section</p>
        <p>
          Here you will find captivating moments from the lives of children with special needs.
          Our videos showcase how they draw, participate in workshops, and attend cultural events.
        </p>
        <p>
          In the blog, you will find interviews with the children, their parents, and the heads of the 
          institutions where they study. These stories will inspire you and help you understand how 
          creativity transforms their lives.
        </p>
        <p>
          Join us to learn more about our project and witness meaningful moments connected to art!
        </p>
      </section>
    </div>
  );
}
