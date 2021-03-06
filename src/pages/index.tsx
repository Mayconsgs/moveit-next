import { GetServerSideProps } from "next";
import Head from "next/head";
import ChallengeBox from "../components/ChallengeBox";
import CompletedChalenges from "../components/CompletedChalenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import SideBar from "../components/SideBar";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";
import styles from "./style.module.scss";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <SideBar />
      <div className={styles.container}>
        <Head>
          <title>Inicio | Move.It</title>
        </Head>
        <ExperienceBar />
        <section>
          <CountdownProvider>
            <div>
              <Profile />
              <CompletedChalenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </CountdownProvider>
        </section>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
