import "../style/global.scss";

function App({ Component, pageProps }) {
  if (process.env.NODE_ENV !== "production") {
    return <Component {...pageProps} />;
  } else {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          fontFamily: '"Open Sans", sans-serif',
          fontSize: "13vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        {"this site is under development".toUpperCase()}
      </div>
    );
  }
}

export default App;
