import styles from "./style.module.scss";

interface LeaderboardTileProps {
  rank: number;
}

const LeaderboardTile = ({ rank }: LeaderboardTileProps) => {
  return (
    <div className={`${styles.grid} ${styles.ranking}`}>
      <div className={styles.rank}>{rank}</div>
      <div className={styles.profile}>
        <img src="https://github.com/mayconsgs.png" alt="Maycon Santos" />
        <div>
          <strong>Maycon Santos</strong>
          <p>
            <img src="icons/level.svg" alt="Level" />
            Level 1
          </p>
        </div>
      </div>
      <div className={styles.score}>
        <span>127</span> completados
      </div>
      <div className={styles.score}>
        <span>154000</span> xp
      </div>
    </div>
  );
};

export default LeaderboardTile;
