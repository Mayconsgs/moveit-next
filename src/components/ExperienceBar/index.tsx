import { useContext } from "react";
import { ChallengeContext } from "../../contexts/ChallengesContext";
import styles from "./style.module.scss";

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengeContext
  );

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} px</span>
    </header>
  );
};

export default ExperienceBar;
