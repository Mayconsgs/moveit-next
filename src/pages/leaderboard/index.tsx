import Head from "next/head";
import LeaderboardTile from "../../components/LeaderboardTile";
import SideBar from "../../components/SideBar";
import styles from "./style.module.scss";

const LeaderboardPage = () => {
  function generateTiles() {
    const rank = [<LeaderboardTile rank={1} />];

    for (let i = 0; i < 10; i++) {
      rank.push(<LeaderboardTile rank={i + 2} />);
    }

    return rank;
  }

  return (
    <div>
      <SideBar />
      <Head>
        <title>Leaderboard | Move.It</title>
      </Head>
      <div className={styles.leaderboardContainer}>
        <h1>Leaderboard</h1>

        <div className={`${styles.grid} ${styles.gridTitle}`}>
          <span>posição</span>
          <span>usuário</span>
          <span>desafios</span>
          <span>experiência</span>
        </div>
        {generateTiles()}
      </div>
    </div>
  );
};

export default LeaderboardPage;
