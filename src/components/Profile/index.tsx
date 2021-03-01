import { useContext } from "react";
import { ChallengeContext } from "../../contexts/ChallengesContext";
import styles from "./style.module.scss";

const Profile = () => {
  const { level } = useContext(ChallengeContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/mayconsgs.png" alt="Maycon Santos" />
      <div>
        <strong>Maycon Santos</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
