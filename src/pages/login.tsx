import { FiArrowRight } from "react-icons/fi";
import styles from "../styles/pages/Login.module.scss";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div>
        <img src="/images/logo-full-white.svg" alt="" />
        <h1>Bem-Vindo</h1>

        <div>
          <img src="icons/Github.svg" alt="GitHub" />
          <p>Faça login com seu Github para começar</p>
        </div>

        <form>
          <input type="text" placeholder="Digite seu username" />
          <button type="submit">
            <FiArrowRight size="2rem" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;