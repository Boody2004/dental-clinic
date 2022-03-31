import AboutDr from "../components/Home/AboutDr";
import Carousel from "../components/Home/Carousel";
import ClinicData from "../components/Home/ClinicData";
import OurCompetencies from "../components/Home/OurCompetencies";
import ScheduleAnAppointment from "../components/Home/ScheduleAnAppointment";
import Services from "../components/Home/Services";

const Home = () => {
  return (
    <section>
      <Carousel />
      <AboutDr />
      <OurCompetencies />
      <ScheduleAnAppointment />
      <ClinicData />
      <Services />
    </section>
  );
};

export default Home;
