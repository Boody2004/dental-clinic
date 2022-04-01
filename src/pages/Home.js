import Carousel from "../components/Home/Carousel";
import VolunteeringBanner from "../components/Home/VolunteeringBanner";
import OurCompetencies from "../components/Home/OurCompetencies";
import ScheduleAnAppointment from "../components/Home/ScheduleAnAppointment";
import ClinicData from "../components/Home/ClinicData";
import Services from "../components/Home/Services";
import Advanced from "../components/Home/Advanced";
import AboutClinic from "../components/Home/AboutClinic";

const Home = () => {
  return (
    <section>
      <Carousel />
      <VolunteeringBanner
        title="Dr. Name"
        img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1648753307/pexels-antoni-shkraba-5215017_sioooz.jpg"
        paragrapghOne=" Minim reprehenderit ipsum ullamco ullamco sint mollit sunt in
              reprehenderit reprehenderit commodo sunt elit pariatur. Consequat
              proident voluptate consectetur laborum esse ad ea ex dolor
              consequat. Velit amet est ullamco ut proident amet duis ut
              incididunt irure non culpa."
        paragrapghTwo=" In aliqua minim officia minim do ad eiusmod sit velit laborum
              occaecat. Lorem aliquip anim anim est et magna irure veniam. Non
              dolore do cupidatat Lorem sunt sint aute adipisicing pariatur duis"
        link="/aboutUs"
      />
      <OurCompetencies />
      <ScheduleAnAppointment />
      <ClinicData />
      <Services />
      <Advanced />
      <AboutClinic />
      <VolunteeringBanner
        title="Dental Tourism In Our Town"
        img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1648771299/pexels-sheila-731217_wltiiv.jpg"
        paragrapghOne="Optimum Care Dental Clinic has good offers and recommendations for
              patients who visit our practice on Dental Tourism. Having full
              mouth restorations, smile makeover procedures, or other treatments
              that require an overnight stay, we facilitate lodging options for
              you with comfortable amenities."
        link="/"
      />
    </section>
  );
};

export default Home;
