import AboutDr from "../components/Home/AboutDr";
import Carousel from "../components/Home/Carousel";
import OurCompetencies from "../components/Home/OurCompetencies";
import ScheduleAnAppointment from "../components/Home/ScheduleAnAppointment";

const Home = () => {
  return (
    <section>
      <Carousel />
      <AboutDr />
      <OurCompetencies />
      <ScheduleAnAppointment />
    </section>
  );
};

export default Home;
