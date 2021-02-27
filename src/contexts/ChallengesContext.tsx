import { createContext, ReactNode, useState } from "react";
import challenges from "../../challenges.json";

interface ChallengeProps {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: ChallengeProps;
  experienceToNextLevel: number;

  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}

const ChallengeContext = createContext({} as ChallengesContextData);

const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(10);

  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,

        levelUp,
        startNewChallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

export { ChallengeContext, ChallengesProvider };
