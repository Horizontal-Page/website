import Introduction from "../components/introduction";
// import Instructions from "../components/instructions"; //later
import Horizontal from "../components/horizontal-scroll"; // horizontal Component
import Footer from "../components/footer";
import Epilogue from "../components/epilogue";
import Head from "next/head";
function Page() {
  return (
    <>
      <Head>
        <meta name="description" content="horizontal scrolling"></meta>
        <meta name="description" content="horizontal scrolling js"></meta>
        <meta
          name="description"
          content="horizontal scrolling Javascript"
        ></meta>
        <meta name="description" content="horizontal scrolling reactjs"></meta>
        <meta name="description" content="horizontal scrolling nextjs"></meta>
        <meta name="keywords" content="Horizontal"></meta>
        <meta name="author" content="Ronnel Babailan"></meta>
      </Head>
      <Introduction />
      {/* <Instructions /> */}
      <Horizontal />
      <Epilogue />
      <Footer />
      <div style={{ position: "fixed", bottom: "0", right: "0" }}>
        <small style={{ fontFamily: '"Fira Mono", monospace' }}>
          Under Development
        </small>
      </div>
    </>
  );
}
export default Page;
