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
      <VolunteeringBannerLeft
        title="Dr. Name"
        img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1648753307/pexels-antoni-shkraba-5215017_sioooz.jpg"
        paragraphOne=" Minim reprehenderit ipsum ullamco ullamco sint mollit sunt in
              reprehenderit reprehenderit commodo sunt elit pariatur. Consequat
              proident voluptate consectetur laborum esse ad ea ex dolor
              consequat. Velit amet est ullamco ut proident amet duis ut
              incididunt irure non culpa."
        paragraphTwo=" In aliqua minim officia minim do ad eiusmod sit velit laborum
              occaecat. Lorem aliquip anim anim est et magna irure veniam. Non
              dolore do cupidatat Lorem sunt sint aute adipisicing pariatur duis"
        btn="block"
        btnTitle="Read more"
        link="/aboutUs"
      />
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
          link="/aboutUs" 
        />
      </div>
      <VolunteeringBannerLeft
        title="Dental Tourism In Our Town"
        img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1648771299/pexels-sheila-731217_wltiiv.jpg"
        paragraphOne="Optimum Care Dental Clinic has good offers and recommendations for
              patients who visit our practice on Dental Tourism. Having full
              mouth restorations, smile makeover procedures, or other treatments
              that require an overnight stay, we facilitate lodging options for
              you with comfortable amenities."
        btn="block"
        btnTitle="Read more"
        link="/"
      />
      <ScheduleAnAppointment />
      <ClinicData />
    </section>
  );
};

export default Home;
