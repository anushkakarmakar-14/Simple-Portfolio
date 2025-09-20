import React from "react";
import styles from "./Experience.module.css";

// Direct imports of skill images
import htmlIcon from "../../assets/skills/html.png";
import cssIcon from "../../assets/skills/css.png";
import reactIcon from "../../assets/skills/react.png";
import nodeIcon from "../../assets/skills/node.png";
import jsIcon from "../../assets/skills/js.png";

import mongoIcon from "../../assets/skills/mongodb.png";
import figmaIcon from "../../assets/skills/figma.png";
import cppIcon from "../../assets/skills/cpp.png";
import mysqlIcon from "../../assets/skills/mysql.png";
import pythonIcon from "../../assets/skills/python.png";
import flaskIcon from "../../assets/skills/flask.png";
import postmanIcon from "../../assets/skills/postman.png";


import skills from "../../data/skills.json";
import js from "@eslint/js";

// Map skill titles to imported images
const skillImages = {
  HTML: htmlIcon,
  CSS: cssIcon,
  React: reactIcon,
  Node: nodeIcon,
  
  MongoDB: mongoIcon,
  Figma: figmaIcon,
  Cpp: cppIcon,
  MySQL: mysqlIcon,
  Python: pythonIcon,
  Flask: flaskIcon,
  Postman: postmanIcon,
  JS: jsIcon,
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img
                  src={skillImages[skill.title]}
                  alt={skill.title}
                  className={styles.skillImage}
                />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
