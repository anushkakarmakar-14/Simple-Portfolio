import React from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/hero/heroImage.png"; // Hero image
import resume from "../../assets/resume.pdf"; // Resume file

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anushka</h1>
        <p className={styles.description}>
         I’m a passionate full-stack developer and technology enthusiast who loves building responsive, efficient, and user-friendly web applications. I thrive on turning creative ideas into reality through clean, maintainable code and innovative design solutions.
        </p>

        <div className={styles.buttons}>
          {/* Contact Button */}
          <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            Contact Me
          </a>

          {/* Download Resume Button */}
          <a href={resume} download className={styles.downloadBtn}>
            Download Resume
          </a>
        </div>
      </div>

     <div className={styles.imageWrapper}>
        <img
          src={heroImg}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
