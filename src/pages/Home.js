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
        <VolunteeringBannerRight
          background="var(--brand_primary)"
          title="Respecting Patient Privacy"
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1648770945/pexels-mentatdgt-1024311_fp988a.jpg"
          paragraphOne="Safeguarding patients privacy and confidentiality in today’s
          health care environment is increasingly challenging. Advanced
          technology, new demands in health care, and development, make it
          more and more difficult to do so."
          paragraphTwo=" As a best dentist, our connection to our patients depends on
          understanding and respecting their personal health
          confidentiality, it is our ethical and legal obligation as health
          care providers and it is our duty to protect the well being of
          those who are entrusted to our care."
          btn="block"
          btnTitle="Read more"
          link="/patientPrivacy"
        />
      </div>
      <VolunteeringBannerLeft url="home/dentalTourismInOurTown" />
      <ScheduleAnAppointment />
      <ClinicData />
    </section>
  );
};

export default Home;
