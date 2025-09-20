import React from "react";
import styles from "./About.module.css";

// Direct imports of all images
import aboutImage from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Frontend developer crafting sleek, responsive, and lightning-fast websites that users love. Passionate about building responsive, high-performance websites with clean code and modern design.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I build fast, reliable backend systems and APIs that make apps run smoothly. I love turning complex problems into optimized, scalable solutions that power seamless digital experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Digital Designer</h3>
              <p>
                Crafted cohesive design systems and engaging landing pages that balance aesthetics with usability.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
