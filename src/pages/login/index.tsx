import Head from "next/head";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";
import styles from "./style.module.scss";

const Login = () => {
  const router = useRouter();

  return (
    <div className={styles.loginContainer}>
      <Head>
        <title>Move.It</title>
      </Head>
      <div>
        <img src="/images/logo-full-white.svg" alt="" />
        <h1>Bem-Vindo</h1>

        <div>
          <img src="icons/Github.svg" alt="GitHub" />
          <p>Faça login com seu Github para começar</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        >
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
