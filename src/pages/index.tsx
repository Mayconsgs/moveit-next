import Head from "next/head";
import CompletedChalenges from "../components/CompletedChalenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import styles from "../styles/pages/Home.module.scss";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChalenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  );
}
