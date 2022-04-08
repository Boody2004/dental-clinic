import { Link } from "react-router-dom";
import Intro from "../components/General/Intro";
import VolunteeringBannerLeft from "../components/General/VolunteeringBannerLeft";
import VolunteeringBannerRight from "../components/General/VolunteeringBannerRight";
import ScheduleAnAppointment from "../components/General/ScheduleAnAppointment";
import ClinicData from "../components/General/ClinicData";

const DentalTourism = () => {
  return (
    <section>
      <Intro
        imgBg="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649416435/pexels-shvets-production-7176319_doux6x.jpg"
        title="Dental Tourism"
        linkBtn="#dental-tourism"
      />
      <div
        id="dental-tourism"
        className="container"
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dental Tourism
            </li>
          </ol>
        </nav>
        <h2 className="title">Dental Tourism in Our Town</h2>
        <VolunteeringBannerLeft
          background="var(--background)"
          subtitle="Lodging"
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1648770945/pexels-mentatdgt-1024311_fp988a.jpg"
          paragraphOne="good offers and recommendations for patients who visit our clinic on Dental Tourism. Having full mouth restorations, dental implants, smile makeover procedures, or other treatments that require an overnight stay, we facilitate lodging options for you with comfortable amenities."
          btn="none"
          link="/"
        />
        <VolunteeringBannerRight
          background="var(--background)"
          subtitle="Touring"
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1648770945/pexels-mentatdgt-1024311_fp988a.jpg"
          paragraphOne="Have a walk back in time and explore ancient mysteries at one of the most impressive ancient sites in the world, consider that there are so many things to see. Enjoy a breathtaking tour while having your dental needs cared for at."
          btn="none"
          link="/"
        />
      </div>
      <ScheduleAnAppointment />
      <ClinicData />
    </section>
  );
};

export default DentalTourism;
