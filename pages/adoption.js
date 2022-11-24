import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar";
import HomepageBottom from "../components/HomepageBottom";
import AdoptionContent from "../components/AdoptionContent";
import AdoptionContentBottom from "../components/AdoptionContentBottom";
import Footer from "../components/Footer";
import AdoptionContentTitle from "../components/AdoptionContentTitle";

function adoption() {
  return (
    <div>
      <Navbar />
      <AdoptionContentTitle/>
      <AdoptionContent/>
      <AdoptionContentBottom/>
      <Footer/>


    </div>
  );
}

export default adoption;
