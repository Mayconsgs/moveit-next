import styles from "../styles/components/CompletedChalenges.module.scss";

const CompletedChalenges = () => {
  return (
    <div className={styles.completedChalengesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
};

export default CompletedChalenges;
