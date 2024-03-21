import Navbar from './Navbar.jsx';
import ServiceSection from './BComponents/Services/ServiceSection';
import SurveySection from './BComponents/Survey/SurveySection';
import Homeee from "./Homeee.jsx";
import Footer from './components/Footer/Footer';
import OurChef from './pages/Home/OurChef/OurChef.js';


function BHome() {
  return (
    <>
      <Navbar />
      <br/> <br/> <br/> <br/>
        <div id="home">
          <Homeee />
        </div>

        
      <ServiceSection />
      <SurveySection /> <br/> <br/>
      {/* <OurChef /> */}
      {/* <ContactSection /> */}
      <Footer/>

    </>
  );
}

export default BHome;
