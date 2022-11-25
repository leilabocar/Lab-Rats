import Navbar from "../components/Navbar";
import DonateTitle from "../components/DonateTitle";
import DonateContent from "../components/DonateContent";
import DonateBottom from "../components/DonateBottom";
import Footer from "../components/Footer";

function donate() {
  return (
    <div>
    <Navbar />
    <DonateTitle />
    <DonateContent/>
    <DonateBottom/>
    <Footer/>

  </div>
  );
}

export default donate;