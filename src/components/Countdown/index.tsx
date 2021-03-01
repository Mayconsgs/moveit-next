import { useContext } from "react";
import { FiPlay, FiX } from "react-icons/fi";
import { CountdownContext } from "../../contexts/CountdownContext";
import styles from "./style.module.scss";

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinish,
    isActive,
    startCountdown,
    resetCountdown,
    percentToEndCicle,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinish ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
          <img src="icons/check_circle.svg" alt="Check" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <FiX />
              <div
                className={styles.bar}
                style={{ width: `${percentToEndCicle}%` }}
              />
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um Ciclo
              <FiPlay fill="var(--white)" />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Countdown;
