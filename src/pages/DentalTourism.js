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
        imgBg="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649433180/pexels-hisham-elshazli-10131669_av3oxx.jpg"
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
        <VolunteeringBannerLeft url="dentalTourism/volunteeringBannerLeft" />
        <VolunteeringBannerRight url="dentalTourism/volunteeringBannerRight" />
      </div>
      <ScheduleAnAppointment />
      <ClinicData />
    </section>
  );
};

export default DentalTourism;
