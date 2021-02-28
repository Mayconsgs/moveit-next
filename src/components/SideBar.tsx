import Link from "next/link";
import { FiAward, FiHome } from "react-icons/fi";
import styles from "../styles/components/SideBar.module.scss";

const SideBar = () => {
  return (
    <header className={styles.sideBarContainer}>
      <img src="icons/Logo.svg" alt="" />
      <nav>
        <Link href="">
          <a>
            <FiHome size="2rem" />
          </a>
        </Link>
        <Link href="">
          <a>
            <FiAward size="2rem" />
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default SideBar;
