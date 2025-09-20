import React, { useState } from "react";
import styles from "./ProjectCard.module.css";

// Direct imports of project images
import aiInterviewImg from "../../assets/projects/AI interview.png";
import aiResumeImg from "../../assets/projects/AIresumeAnalyzer.png";
import digitalImg from "../../assets/projects/digital.png";
import realEstateImg from "../../assets/projects/Real estate.png";

// Map image keys to imported images
const projectImages = {
  aiInterview: aiInterviewImg,
  aiResume: aiResumeImg,
  digital: digitalImg,
  realEstate: realEstateImg,
};

export const ProjectCard = ({
  project: { title, imageKey, description, skills, demo, source },
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100; // characters before truncation

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div className={styles.container}>
      <img
        src={projectImages[imageKey]} // use mapped image
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>
        {isExpanded
          ? description
          : description.slice(0, maxLength) +
            (description.length > maxLength ? "..." : "")}
      </p>

      {description.length > maxLength && (
        <button onClick={toggleReadMore} className={styles.readMoreBtn}>
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}

      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Demo
        </a>
        <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
