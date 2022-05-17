import { Link } from "react-router-dom";
import Intro from "../components/General/Intro";
import VolunteeringBannerLeft from "../components/General/VolunteeringBannerLeft";
import VolunteeringBannerRight from "../components/General/VolunteeringBannerRight";
import ScheduleAnAppointment from "../components/General/ScheduleAnAppointment";
import ClinicData from "../components/General/ClinicData";

const AboutUs = () => {
  return (
    <section>
      <Intro
        imgBg="https://res.cloudinary.com/dirbnpgsp/image/upload/v1649258787/pexels-max-vakhtbovych-7511752_tgabpe.jpg"
        title="About Us"
        linkBtn="#about-us"
      />
      <div
        id="about-us"
        className="container"
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About Us
            </li>
          </ol>
        </nav>
        <VolunteeringBannerLeft url="aboutUs/volunteeringBannerLeft" />
        <VolunteeringBannerRight url="aboutUs/volunteeringBannerRight" />
        <VolunteeringBannerLeft url="aboutUs/volunteeringBannerLeftTwo" />
        <VolunteeringBannerRight url="aboutUs/volunteeringBannerRightTwo" />
      </div>
      <ScheduleAnAppointment />
      <ClinicData />
    </section>
  );
};

export default AboutUs;
