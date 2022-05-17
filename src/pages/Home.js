import Carousel from "../components/Home/Carousel";
import VolunteeringBannerLeft from "../components/General/VolunteeringBannerLeft";
import OurCompetencies from "../components/Home/OurCompetencies";
import ScheduleAnAppointment from "../components/General/ScheduleAnAppointment";
import ClinicData from "../components/General/ClinicData";
import Services from "../components/Home/Services";
import Advanced from "../components/Home/Advanced";
import VolunteeringBannerRight from "../components/General/VolunteeringBannerRight";

const Home = () => {
  return (
    <section>
      <Carousel />
      <VolunteeringBannerLeft url="home/aboutDr" />
      <OurCompetencies />
      <ScheduleAnAppointment />
      <ClinicData />
      <Services />
      <Advanced />
      <div className="text-light">
        <VolunteeringBannerRight url="home/respectingPatientPrivacy" />
      </div>
      <VolunteeringBannerLeft url="home/dentalTourismInOurTown" />
      <ScheduleAnAppointment />
      <ClinicData />
    </section>
  );
};

export default Home;
