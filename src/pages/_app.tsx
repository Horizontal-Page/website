import "../style/global.scss";

function App({ Component, pageProps }) {
  return (
    <div style={{ minWidth: "500px" }}>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
