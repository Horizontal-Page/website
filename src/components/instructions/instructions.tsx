import styles from "./style.module.scss";
import Highlight from "react-highlight";

function Instructions() {
  return <div></div>;
}

const reactComponents = () => {
  const codeString = `
  import HorizontalPage from "react-horizontal-page";

  function Page() {
    return (
      <HorizontalPage multiplier={1} lerp={0}>
        <div style={{ fontSize: "30vh", whiteSpace: "nowrap" }}>
          He heard the crack echo in the late afternoon about a mile away. His
          heart started racing and he bolted into a full sprint. "It wasn't a
          gunshot, it wasn't a gunshot," he repeated under his breathlessness as
          he continued to sprint.
          <br /> He heard the crack echo in the late afternoon about a mile away. His
          heart started racing and he bolted into a full sprint. "It wasn't a gunshot,
          it wasn't a gunshot," he repeated under his breathlessness as he continued
          to sprint.
        </div>
      </HorizontalPage>
    );
  }
  `;

  return (
    <div className={styles.container}>
      <div>
        <h1>
          <a
            href="https://github.com/Horizontal-Page/react-horizontal-page"
            rel="noreferrer"
            target={"_blank"}
            style={{ marginRight: "5px" }}
          >
            React-Horizontal-Page
          </a>
        </h1>
      </div>

      <div>
        <h1>References</h1>
        <table>
          <tbody>
            <tr>
              <th>Props</th>
              <th>Type</th>
              <th>Default Value</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>multiplier</td>
              <td>number</td>
              <td>1</td>
              <td>
                {`Optional. multiplier for the initial height this numeric between 0 to N >= 0`}
              </td>
            </tr>
            <tr>
              <td>lerp</td>
              <td>number</td>
              <td>0</td>
              <td>
                {`Optional. Linear interpolation (lerp) intensity. numeric between 0 to N >= 0. This defines the "smoothness" intensity. The higher the smoother.`}
              </td>
            </tr>
            <tr>
              <td>className</td>
              <td>string</td>
              <td>none</td>
              <td>{`Optional. adding className to the Wrapper`}</td>
            </tr>
            <tr>
              <td>style</td>
              <td>CSSProperties</td>
              <td>none</td>
              <td>{`Optional. adding style to the Wrapper`}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h4 id="usage-examples" style={{ marginTop: "1em" }}>
          Usage/Examples
        </h4>
        <Highlight className="javascript">{codeString}</Highlight>
      </div>
      <div>
        <h2 id="license" style={{ marginTop: "0.5em" }}>
          License
        </h2>
        <a
          href="https://github.com/Horizontal-Page/react-horizontal-page/blob/master/LICENSE"
          rel="noreferrer"
          target={"_blank"}
        >
          MIT
        </a>
      </div>
      <div>
        <h2 id="contributing" style={{ marginTop: "0.5em" }}>
          Contributing
        </h2>
        <p>Contributions are always welcome!</p>
        <p>
          See <code>contributing.md</code> for ways to get started.
        </p>
        <p>
          Please adhere to this project&#39;s <code>code of conduct</code>.
        </p>
      </div>
      <div>
        <h2 id="support">Support</h2>
        <p>For support, email babailanxx@gmail.com.</p>
      </div>
    </div>
  );
};

export default Instructions;
