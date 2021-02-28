import Link from "next/link";
import { useRouter } from "next/router";
import { FiAward, FiHome } from "react-icons/fi";
import styles from "../styles/components/SideBar.module.scss";

const SideBar = () => {
  const router = useRouter();

  return (
    <header className={styles.sideBarContainer}>
      <img src="icons/Logo.svg" alt="" />
      <nav>
        <Link href="/home">
          <a
            className={
              router.route == "/home" ? styles.currentRoute : undefined
            }
          >
            <FiHome size="2rem" />
          </a>
        </Link>
        <Link href="/leaderboard">
          <a
            className={
              router.route == "/leaderboard" ? styles.currentRoute : undefined
            }
          >
            <FiAward size="2rem" />
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default SideBar;
