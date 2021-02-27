import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.scss";

export const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengeContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.levelUpModalContainer}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Vocẽ alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
};
