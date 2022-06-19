import Introduction from "../components/introduction";
// import Instructions from "../components/instructions"; //later
import Horizontal from "../components/horizontal-scroll"; // horizontal Component
import Footer from "../components/footer";
function Page() {
  return (
    <>
      <Introduction />
      {/* <Instructions /> */}
      <Horizontal />
      <Footer />
    </>
  );
}
export default Page;
