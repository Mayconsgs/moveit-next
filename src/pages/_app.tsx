import "../styles/global.scss";

function MyApp({ Component, pageProps, ...rest }) {
  return <Component {...pageProps} />;
}

export default MyApp;
