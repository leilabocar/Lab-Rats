import Navbar from "../components/Navbar";
import VMGAbout from "../components/VMGAbout";
import VMGContent from "../components/VMGContent";
import Footer from "../components/Footer";
import AdoptionContentBottom from "../components/AdoptionContentBottom";


function about() {
  return (
    <div>
      <Navbar />
      <VMGAbout/>
      <VMGContent/>
      <AdoptionContentBottom/>
      <Footer/>


    </div>
  );
}

export default about;
