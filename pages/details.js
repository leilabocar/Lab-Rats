import Navbar from "../components/Navbar";
import DetailsTitle from "../components/DetailsTitle";
import Details from "../components/Details";
import Footer from "../components/Footer";
import DetailsBottom from "../components/DetailsBottom";



function details() {
  return (
    <div>
      <Navbar />
      <DetailsTitle/>
      <Details/>
      <DetailsBottom/>
      <Footer/>

    </div>
  );
}

export default details;