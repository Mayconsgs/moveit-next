import styles from "../styles/components/Profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/mayconsgs.png" alt="Maycon Santos" />
      <div>
        <strong>Maycon Santos</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
